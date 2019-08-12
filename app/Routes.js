import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Home from './components/Home';
import Expectation from './components/Expectation';
import Basket from './components/Basket';
import Catalog from "./components/Catalog";
import Mirror from "./components/Mirror";

export default () => (
  <App>
    <Switch>
      <Route path={routes.EXPECTATION} component={Expectation} />
      <Route path={routes.CATALOG} component={Catalog} />
      <Route path={routes.BASKET} component={Basket} />
      <Route path={routes.MIRROR} component={Mirror} />
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </App>
);
