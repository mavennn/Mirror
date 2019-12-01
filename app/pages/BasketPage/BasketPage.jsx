import React from 'react';

// import BasketFooter from '../../components/BasketFooter';
import Emoji from '../../components/Emoji/Emoji';
import HeaderContainer from '../../components/Header/HeaderContainer';
import BasketThingsListContainer from '../../components/BasketThingsList/BasketThingsListContainer';
import ClearBasketButtonContainer from '../../components/ClearBasketButton/ClearBasketButtonContainer';
import PackToCheckoutButtonContainer from '../../components/PackToCheckoutButton/PackToCheckoutButtonContainer';

const BasketPage = ({ basketThings }) => {
  if (basketThings.length !== 0) {
    return (
      <div id="basket">
        <HeaderContainer />
        <BasketThingsListContainer />
        <div className="basketFooter">
          <ClearBasketButtonContainer />
          <PackToCheckoutButtonContainer />
        </div>
      </div>
    );
  }
  return (
    <div id="basket">
      <HeaderContainer />
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

export default BasketPage;
