import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import BarCode from './BarCodeInput';
import { addToHistory, setCurrentItem } from '../actions/items';
import axios from 'axios';

const Basket = ({ basketItems, historyItems, addCurrentItem }) => {
  if (basketItems.length !== 0) {
    return (
      <div id="basket">
        <Header />
        <ul>
          {
            basketItems.map(item => (
              <li key={item.vendor_code + item.sizes}>
                <img
                  src={require(`../assets/img/${item.vendor_code}-1.png`)}
                  alt="img"
                  onClick={() => addCurrentItem(item.vendor_code, historyItems)}
                />
                <p>{item.title}</p>
                <p>{item.sizes}</p>
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
  historyItems: state.items.historyItems
});

const mapDispatchToProps = dispatch => ({
  addCurrentItem: (vendorCode, history) => {
    axios.get(`http://localhost:8080/thing/${vendorCode}`)
      .then((response) => {
        dispatch(setCurrentItem(response.data));
        if (history.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
          dispatch(addToHistory(response.data));
        }
      });
  }
});

Basket.defaultProps = {
  basketItems: PropTypes.array,
};

Basket.propTypes = {
  basketItems: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
