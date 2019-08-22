import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';
import sockets from '../../constants/sockets';
import { clearBasket } from '../../reducers/items';

// eslint-disable-next-line max-len
function getConsultant(socket, type, ...params) { // (type) (type, title, vendorCode, size, price) (type, things[])
  const roomNumber = process.env.ROOM;
  let query = {};
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`
  switch (type) {
    case sockets.CALL_CONSULTANT:
      query = { time, type, roomNumber, text: sockets.CALL_TEXT };
      break;
    case sockets.BRING_THING:
      const [title, vendorCode, size, price] = params;
      query = {
        time, type, roomNumber, text: sockets.BRING_TEXT, title, vendorCode, size, price
      };
      break;
    case sockets.TO_CHECKOUT:
      const things = params;
      query = {
        time, type, text: sockets.TO_CHECKOUT_TEXT, roomNumber, things
      };
      break;
    default:
      null;
  }
  console.log(query);
  socket.emit('getConsultant', query);
}

const Basket = ({ basketItems, socket, clearBasket }) => (
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
    <button onClick={getConsultant(socket, sockets.TO_CHECKOUT, basketItems)}>
      Принести товары
    </button>
    <button onClick={() => clearBasket()}>Очистить корзину</button>
  </div>
);

const mapStateToProps = state => ({
  basketItems: state.items.basketItems,
  socket: state.sockets.socket,
});

Basket.propTypes = {
  basketItems: PropTypes.array,
  socket: PropTypes.object
};

export default connect(mapStateToProps, { clearBasket })(Basket);
