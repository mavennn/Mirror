import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import io from 'socket.io-client';
import type { Store } from '../reducers/types';
import Routes from '../Routes';
import routes from '../constants/routes';
import { setCurrentItem, addToHistory } from '../actions/items';
import { SET_SOCKET } from '../actions/sockets';

require('dotenv');

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const { ipcRenderer } = window.require('electron');

export let socket = {};

type Props = {
  store: Store,
  history: {}
};

class Root extends Component<Props> {
  componentDidMount(): * {
    const { store } = this.props;
    const { history } = this.props;
    socket = io(`http://${ADDRESS}:${PORT}/rooms`);
    store.dispatch({ type: SET_SOCKET, payload: socket });

    ipcRenderer.on('vendorCode', (event, message) => {
      if (message) {
        axios.get(`http://${ADDRESS}:${PORT}/thing/${message}`)
          .then((response) => {
            store.dispatch(setCurrentItem(response.data));
            if (!store.getState().items.historyItems.includes(response.data)) {
              store.dispatch(addToHistory(response.data));
            }
            if (store.getState().router.location.pathname !== routes.HOME) {
              history.push(routes.HOME);
            }
          });
      }
    });
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}


export default Root;
