import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Catalog from './components/Catalog';
import Basket from './components/Basket';
import Expectation from './components/Expectation';
import Main from './components/Main';
import Mirror from './components/Mirror';
import App from './App';
import rootReducer from './redusers/rootReducer';


const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    // Load the data saved in localStorage, against the key 'app_state'
    const serialisedState = window.localStorage.getItem('app_state');

    // Passing undefined to createStore will result in our app getting the default state
    // If no data is saved, return undefined
    if (!serialisedState) return undefined;

    // De-serialise the saved state, and return it.
    return JSON.parse(serialisedState);
  } catch (err) {
    // Return undefined if localStorage is not available,
    // or data could not be de-serialised,
    // or there was some other error
    return undefined;
  }
};

const oldState = loadState();

const store = createStore(rootReducer, oldState, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Expectation} />
      <Route path="/main" component={Main} />
      <Route path="/main/basket" component={Basket} />
      <Route path="/main/catalog" component={Catalog} />
      <Route path="/main/mirror" component={Mirror} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


store.subscribe(() => {
  saveState(store.getState());
});
