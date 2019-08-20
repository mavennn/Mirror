import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import sockets from '../constants/sockets';
import { addToBasket } from '../actions/items';

require('dotenv');

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0; const
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// eslint-disable-next-line max-len
function getConsultant(socket, type, ...params) { // (type) (type, title, vendorCode, size, price) (type, things[])
  const roomNumber = process.env.ROOM;
  const id = uuidv4();
  let query = {};
  switch (type) {
    case sockets.CALL_CONSULTANT:
      null;
    case sockets.BRING_THING:
      const [title, vendorCode, size, price] = params;
      query = { id, type, roomNumber, title, vendorCode, size, price };
      console.log(query)
    case 'TO_CHECKOUT':
      const things = params;
      query = { id, type, roomNumber, things };
    default:
      null;
  }
  socket.emit('getConsultant', query);
}

const Card = ({
  thing, basket, socket, addBasket
}) => (
  <>
    <div className="card w-30 ma3">
      <img
        src={require(`../assets/img/${thing.vendor_code}-1.png`)}
      />
    </div>
    <div className="info w-20">
      <h2>
        {thing.price}
        {' '}
руб.
      </h2>
      <p>
        <select multiple id="sizes">
          {
            thing.sizes.map(sz => (
              <option key={sz.id}>{sz.title}</option>
            ))
          }
        </select>
      </p>
      <button onClick={() => {
        $('#sizes').val()[0] === undefined
          ? alert('choose size please')
          : addBasket(thing, basket, $('#sizes').val()[0]);
      }}
      >
        Добавить в корзину
      </button>
      <button
        className="ma3"
        onClick={() => getConsultant(socket, sockets.BRING_THING, thing.title, thing.vendor_code, $('#sizes').val()[0], thing.price)}
      >
        Принести сейчас
      </button>
    </div>
  </>
);

const mapStateToProps = state => ({
  thing: state.items.currentItem,
  basket: state.items.basketItems,
  socket: state.sockets.socket
});

const mapDispatchToProps = dispatch => ({
  addBasket: (item, basket, size) => {
    const index = basket.findIndex(x => x.vendor_code === item.vendor_code && x.sizes[0] === size);
    if (index === -1) {
      dispatch(addToBasket({ ...item, sizes: [size] }));
    } else if (basket[index].sizes[0] !== size) {
      dispatch(addToBasket({ ...item, sizes: [size] }));
    } else {
      alert('товар уже есть в корзине');
    }
  }
});

Card.defaultProps = {
  thing: PropTypes.object,
  basket: PropTypes.array,
  socket: PropTypes.object,
  addBasket: PropTypes.func
}

Card.propTypes = {
  thing: PropTypes.object,
  basket: PropTypes.array,
  socket: PropTypes.object,
  addBasket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
