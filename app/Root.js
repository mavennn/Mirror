import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ipcRenderer } from 'electron';
import Routes from './Routes';
import routes from './constants/routes';
import { fetchThingInfo } from './store/actions/сurrentThingActions';
import { setSocket } from './store/actions/socketsActions';
import checkInaction from './helpers/check-in-action';

class Root extends Component {
  componentDidMount() {
    
    // TODO: положить history и store в context
    const { store, history } = this.props;
    checkInaction(history);
    store.dispatch(setSocket());

    ipcRenderer.on('vendorCode', (event, barcode) => {
      if (barcode) {
        store.dispatch(fetchThingInfo(barcode, 'barcode'));
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
