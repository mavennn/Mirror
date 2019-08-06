import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import BarCode from './BarCodeInput';
import { setCurrentItem } from '../actions/items';

const Basket = ({ basketItems, setCurrentItem }) => {
  if (basketItems.length !== 0) {
    return (
      <div id="basket">
        <Header />
        <ul>
          {
            basketItems.map(item => (
              <li key={item.bar_code}>
                <img
                  src={require(`../assets/img/${item.vendor_code}-1.png`)}
                  alt="img"
                />
                <p>{item.title}</p>
              </li>
            ))
          }
        </ul>
        <BarCode />
      </div>
    );
  }
  return (
    <div id="basket">
      <Header />
      <BarCode />
    </div>
  );
};

const mapStateToProps = state => ({
  basketItems: state.items.basketItems,
});

const mapDispatchToProps = {
  setCurrentItem
};

Basket.defaultProps = {
  basketItems: PropTypes.arrayOf,
};

Basket.propTypes = {
  basketItems: PropTypes.arrayOf,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
