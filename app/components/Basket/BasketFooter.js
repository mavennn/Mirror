import React from 'react';

const BasketFooter = ({ clearBasket }) => (
  <div className="basketFooter">
    <button onClick={() => clearBasket()}>Очистить корзину</button>
    <button>Упаковать на кассу</button>
  </div>
);

export default BasketFooter;
