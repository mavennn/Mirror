import React from 'react';

const AddToBasketButton = ({ addToBasket, currentThing }) => (
  <div>
    <button
      onClick={() => {
        addToBasket(currentThing);
      }}
    >
      Добавить в корзину
    </button>
  </div>
);

export default AddToBasketButton;
