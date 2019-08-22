import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import sockets from '../../constants/sockets';

import Capsule from './Capsule';
import History from './History';
import Card from './Card';

require('dotenv').config();

// eslint-disable-next-line max-len
function getConsultant(socket, type, ...params) { // (type) (type, title, vendorCode, size, price) (type, things[])
  const roomNumber = process.env.ROOM;
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`
  let query = {};
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

const Home = ({ thing, socket }) => {
  if (Object.keys(thing).length !== 0) {
    return (
      <div>
        <Header />
        <div className="flex justify-between">
          <h1 className="ma3">{thing.title}</h1>
          <button onClick={() => {
           getConsultant(socket, sockets.CALL_CONSULTANT)
          }}
          >
            Вызвать консультанта
          </button>
        </div>
        <div className="content flex">
          <Card />
          <Capsule />
        </div>
        <History />

      </div>
    );
  }
  return (null);
};

const mapStateToProps = state => ({
  thing: state.items.currentItem,
  socket: state.sockets.socket
});

export default connect(mapStateToProps, null)(Home);
