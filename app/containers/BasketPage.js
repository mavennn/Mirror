import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Header from '../components/Header';
import BasketList from '../components/Basket/BasketList';
import BasketFooter from '../components/Basket/BasketFooter';
import Emoji from '../components/Emoji';
import {
  getConsultantThunkCreator,
  setCurrentThingThunkCreator,
  removeFromBasketThunkCreator
} from '../reducers/things';
import { clearBasket } from '../actions/things';

const BasketPage = ({
  getConsultantThunkCreator,
  setCurrentThingThunkCreator,
  removeFromBasketThunkCreator,
  clearBasket,
  basketThings,
  history,
}) => {
  if (basketThings.length !== 0) {
    return (
      <div id="basket">
        <Header />
        <BasketList
          history={history}
          basketThings={basketThings}
          setThing={setCurrentThingThunkCreator}
          remove={removeFromBasketThunkCreator}
        />
        <BasketFooter
          getConsultant={getConsultantThunkCreator}
          clearBasket={clearBasket}
        />
      </div>

    );
  }
  return (
    <div id="basket">
      <Header />
      <div className="waiting">
        <p>
Здесь пока ничего нет
          <Emoji symbol="🙈" />
        </p>
        <p>Отсканируй товар или перейди в каталог</p>
      </div>
    </div>

  );
};

BasketPage.defaultProps = {
  getConsultantThunkCreator: () => {},
  setCurrentThingThunkCreator: () => {},
  removeFromBasketThunkCreator: () => {},
  clearBasket: () => {},
};

BasketPage.propTypes = {
  getConsultantThunkCreator: PropTypes.func,
  setCurrentThingThunkCreator: PropTypes.func,
  removeFromBasketThunkCreator: PropTypes.func,
  clearBasket: PropTypes.func,
};

const mapStateToPorps = state => ({
  basketThings: state.things.basketThings
});

const mapDispatchToProps = {
  getConsultantThunkCreator,
  setCurrentThingThunkCreator,
  removeFromBasketThunkCreator,
  clearBasket,
};

export default connect(mapStateToPorps, mapDispatchToProps)(BasketPage);
