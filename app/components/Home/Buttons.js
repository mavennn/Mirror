import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ thing, addToBasket }) => (
  <div className="buttons">
    <div>
      <button onClick={() => {
        addToBasket(thing);
      }}
      >
Добавить в корзину
      </button>
    </div>
    <div>
      <button>Принести</button>
    </div>
  </div>
);

Buttons.defaultProps = {
  addToBasket: PropTypes.func,
};

Buttons.propTypes = {
  addToBasket: PropTypes.func,
};

export default Buttons;
