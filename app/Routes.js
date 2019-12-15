import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './App';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import ExpectationPageContainer from './pages/ExpectationPage/ExpectationPageContainer';
import BasketPageContainer from './pages/BasketPage/BasketPageContainer';
import CatalogContainer from './pages/CatalogPage/CatalogPageContainer';
import MirrorPageContainer from './pages/MirrorPage/MirrorPageContainer';

const Routes = () => (
  <App>
    <Switch>
      <Route path={routes.EXPECTATION} component={ExpectationPageContainer} />
      <Route path={routes.CATALOG} component={CatalogContainer} />
      <Route path={routes.BASKET} component={BasketPageContainer} />
      <Route path={routes.MIRROR} component={MirrorPageContainer} />
      <Route path={routes.HOME} component={HomePageContainer} />
    </Switch>
  </App>
);

export default Routes;
