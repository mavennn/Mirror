import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import sockets from '../../constants/sockets';
import { addToBasketThunkCreator } from '../../reducers/items';

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
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;
  let query = {};
  switch (type) {
    case sockets.CALL_CONSULTANT:
      time, query = { type, roomNumber, text: sockets.CALL_TEXT };
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

const Card = ({
  thing, socket, addToBasketThunkCreator
}) => (
  <>
    <div className="card w-30 ma3">
      <img
        src={require(`../../assets/img/${thing.vendor_code}-1.png`)}
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
      <button onClick={() => { addToBasketThunkCreator(thing, $('#sizes').val()[0]); }}>
        Добавить в корзину
      </button>
      <button
        className="ma3"
        onClick={() => {
          if ($('#sizes').val()[0]) {
            getConsultant(socket, sockets.BRING_THING, thing.title, thing.vendor_code, $('#sizes').val()[0], thing.price);
          } else {
            alert('Выбери размер');
          }
        }}
      >
        Принести сейчас
      </button>
    </div>
  </>
);

const mapStateToProps = state => ({
  thing: state.items.currentItem,
  socket: state.sockets.socket
});

Card.defaultProps = {
  thing: PropTypes.object,
  socket: PropTypes.object,
};

Card.propTypes = {
  thing: PropTypes.object,
  socket: PropTypes.object,
};

export default connect(mapStateToProps, { addToBasketThunkCreator })(Card);
