import React from 'react';
import PropTypes from 'prop-types';

import * as sockets from '../../constants/sockets';

const Buttons = ({ getConsultant, addToBasket, thing }) => (
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
      <button
        onClick={() => getConsultant(sockets.BRING_THING, thing.title, thing.vendorid, thing.size, thing.newprice)}
      >Принести</button>
    </div>
  </div>
);

Buttons.defaultProps = {
  getConsultant: () => {},
  addToBasket: () => {},
};

Buttons.propTypes = {
  getConsultant: PropTypes.func,
  addToBasket: PropTypes.func,
};

export default Buttons;
