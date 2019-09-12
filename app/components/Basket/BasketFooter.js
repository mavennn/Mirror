import React from 'react';
import PropTypes from 'prop-types';

import sockets from '../../constants/sockets';

const BasketFooter = ({ getConsultant, clearBasket, basketThings }) => (
  <div className="basketFooter">
    <button onClick={() => clearBasket()}>Очистить корзину</button>
    <button onClick={() => getConsultant(sockets.TO_CHECKOUT, basketThings)}>Упаковать на кассу</button>
  </div>
);

BasketFooter.defaultProps = {
  getConsultant: () => {},
  clearBasket: () => {},
};

BasketFooter.propTypes = {
  getConsultant: PropTypes.func,
  clearBasket: PropTypes.func,
};

export default BasketFooter;
