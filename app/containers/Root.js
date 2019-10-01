import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import io from 'socket.io-client';
import Routes from '../Routes';
import routes from '../constants/routes';
import {
  setCurrentThing, addToHistory
} from '../actions/things';
import { SET_SOCKET } from '../actions/sockets';

import Thing from '../../.configs/thing';

require('dotenv').config();

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;
const ROOM = process.env.ROOM;

const { ipcRenderer } = window.require('electron');

export let socket = {};

type Props = {
  store: Store,
  history: {}
};

function checkInaction(history) {
  let timer;

  window.onload = timerReset;
  document.onkeypress = timerReset;
  document.onmousemove = timerReset;
  document.onmousedown = timerReset;
  document.ontouchstart = timerReset;
  document.onclick = timerReset;
  document.onscroll = timerReset;
  document.onkeypress = timerReset;

  function timerElapsed() {
    history.push(routes.EXPECTATION);
  }

  function timerReset() {
    clearTimeout(timer);
    timer = setTimeout(timerElapsed, 1 * 60 * 1000); // 1 min
  }
}

class Root extends Component<Props> {
  componentDidMount(): * {
    const { store } = this.props;
    const { history } = this.props;
    checkInaction(history);
    socket = io(`http://${ADDRESS}:${PORT}/rooms`);
    socket.emit('newRoomConnection', ROOM);
    store.dispatch({ type: SET_SOCKET, payload: socket });

    ipcRenderer.on('vendorCode', (event, message) => {
      const { historyThings } = store.getState().things;
      if (message) {
        axios.get(`http://${ADDRESS}:${PORT}/thing/${message}`)
          .then((response) => {
            let thingObject = new Thing(response.data);
            store.dispatch(setCurrentThing(response.data));
            if (historyThings.findIndex(x => x.vendorcode === thingObject.vendorcode) === -1) {
              store.dispatch(addToHistory(thingObject));
            }
            if (store.getState().router.location.pathname !== routes.HOME) {
              history.push(routes.HOME);
            }
          });
      }
    });
  }

  componentWillUnmount() {
    socket.emit('roomDisconnected', ROOM);
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
