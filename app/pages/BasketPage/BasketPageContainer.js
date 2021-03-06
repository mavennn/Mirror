import React from 'react';
import { connect } from 'react-redux';

import { history } from '../../store/configureStore';

import BasketPage from './BasketPage';
import {
  clearBasket,
  removeFromBasket,
} from '../../store/actions/basketThingsActions';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const BasketPageContainer = ({
  basketThings,
  getConsultantThunkCreator,
  removeFromBasket,
  clearBasket,
  fetchThingInfo,
}) => (
  <BasketPage
    basketThings={basketThings}
    getConsultantThunkCreator={getConsultantThunkCreator}
    removeFromBasket={removeFromBasket}
    clearBasket={clearBasket}
    goBack={history.push}
    fetchThingInfo={fetchThingInfo}
  />
);

const mapStateToProps = (state) => ({
  basketThings: state.basketThings.basketThings,
});

const mapDispatchToProps = {
  getConsultantThunkCreator,
  removeFromBasket,
  clearBasket,
  fetchThingInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPageContainer);
