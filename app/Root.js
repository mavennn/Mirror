import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ipcRenderer } from 'electron';
import Routes from './Routes';
import routes from './constants/routes';
import { fetchThingInfo } from './store/actions/сurrentThingActions';
import { setSocket } from './store/actions/socketsActions';

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

class Root extends Component {
  componentDidMount() {
    const { store, history } = this.props;
    checkInaction(history);
    store.dispatch(setSocket());

    ipcRenderer.on('vendorCode', (event, barcode) => {
      if (barcode) {
        store.dispatch(fetchThingInfo(barcode));
        if (store.getState().router.location.pathname !== routes.HOME) {
          history.push(routes.HOME);
        }
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
