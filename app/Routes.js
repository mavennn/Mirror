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
      
      {/* Приветствие и ожидание */}
      <Route path={routes.EXPECTATION} component={ExpectationPageContainer} />

      {/* Каталог товаров */}
      <Route path={routes.CATALOG} component={CatalogContainer} />

      {/* Корзина */}
      <Route path={routes.BASKET} component={BasketPageContainer} />

      {/* Пустая страница зеркала */}
      <Route path={routes.MIRROR} component={MirrorPageContainer} />

      {/* Основная страница  */}
      <Route path={routes.HOME} component={HomePageContainer} />
    </Switch>
  </App>
);

export default Routes;
