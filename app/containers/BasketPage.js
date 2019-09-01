import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import BasketList from '../components/Basket/BasketList';
import BasketFooter from '../components/Basket/BasketFooter';
import Emoji from '../components/Emoji';

import { setCurrentThingThunkCreator } from '../reducers/things';
import { clearBasket, removeFromBasket } from '../actions/things';

const BasketPage = ({ basketThings, setCurrentThingThunkCreator, history, clearBasket, removeFromBasket }) => {
  if (basketThings.length !== 0) {
    return (
      <div id="basket">
        <Header />
        <BasketList
          history={history}
          basketThings={basketThings}
          setThing={setCurrentThingThunkCreator}
          remove={removeFromBasket}
        />
        <BasketFooter
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

const mapStateToPorps = state => ({
  basketThings: state.things.basketThings
});

const mapDispatchToProps = {
  setCurrentThingThunkCreator,
  clearBasket,
  removeFromBasket
};

export default connect(mapStateToPorps, mapDispatchToProps)(BasketPage);
