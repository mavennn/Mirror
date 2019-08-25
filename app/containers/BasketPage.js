import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const BasketPage = ({ basket }) => {
  if (basket.length !== 0) {
    return (
      <div id="basket">
        <Header />
        <ul>
          {
            basket.map(item => (
              <li key={item.id}>{item.model}</li>
            ))
        }
        </ul>
      </div>

    );
  }
  return (
    <div id="basket">
      <Header />
      <div className="waiting">
        <p>Добавьте товары в корзину...</p>
      </div>

    </div>

  );
};

const mapStateToPorps = state => ({
  basket: state.things.basketThings
});

export default connect(mapStateToPorps, null)(BasketPage);
