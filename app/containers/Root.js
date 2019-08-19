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


type Props = {
  store: Store,
  history: {}
};

class Root extends Component<Props> {
  componentDidMount(): * {
    const socket = io(`http://${ADDRESS}:${PORT}/rooms`);
    this.props.store.dispatch({ type: SET_SOCKET, payload: socket });


    ipcRenderer.on('vendorCode', (event, message) => {
      if (message) {
        axios.get(`http://localhost:3123/thing/${message}`)
          .then((response) => {
            this.props.store.dispatch(setCurrentItem(response.data));
            // eslint-disable-next-line max-len
            if (this.props.store.getState().items.historyItems.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
              this.props.store.dispatch(addToHistory(response.data));
            }
            if (this.props.store.getState().router.location.pathname !== routes.HOME) {
              this.props.history.push(routes.HOME);
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
