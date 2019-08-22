import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';
import sockets from '../../constants/sockets';
import { clearBasket, getConsultantThunkCreator } from '../../reducers/items';

const Basket = ({ basketItems, clearBasket, getConsultantThunkCreator }) => {
  let totalSum = basketItems.reduce((accumulator, item) => accumulator + item.price, 0);

  return (
    <div className="basket">
      <Header />
      <ul>
        {
          basketItems.map(item => (
              <li key={item.vendor_code + item.sizes[0]} className="flex ml6 mr6 mb4">
                <img src={require(`../../assets/img/${item.vendor_code}-1.png`)} />
                <div className="pl4">
                  <h2>{item.title}</h2>
                  <h3 className="">{item.price}</h3>
                  <h3 className="">{item.sizes[0]}</h3>
                  <div>В наличии: </div>
                </div>
              </li>
          ))
        }
      </ul>
      <button onClick={() => getConsultantThunkCreator(sockets.TO_CHECKOUT, basketItems)}>
        Принести товары
      </button>
      <button onClick={() => clearBasket()}>Очистить корзину</button>
      <p>
        {totalSum}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  basketItems: state.items.basketItems,
});

Basket.propTypes = {
  basketItems: PropTypes.array,
};

export default connect(mapStateToProps, { clearBasket, getConsultantThunkCreator })(Basket);
