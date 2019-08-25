import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ExpectationPage from './containers/ExpectationPage';
import BasketPage from './containers/BasketPage';
import Catalog from './components/Catalog';
import Mirror from './components/Mirror';

const Routes = () => (
  <App>
    <Switch>
      <Route path={routes.EXPECTATION} component={ExpectationPage} />
      <Route path={routes.CATALOG} component={Catalog} />
      <Route path={routes.BASKET} component={BasketPage} />
      <Route path={routes.MIRROR} component={Mirror} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);

export default Routes;
