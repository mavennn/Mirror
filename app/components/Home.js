import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import Capsule from './Capsule';
import History from './History';
import Card from './Card';

require('dotenv').config();

const Home = ({ thing }) => {
  if (Object.keys(thing).length !== 0) {
    return (
      <div>
        <Header/>
        <div className="flex justify-between">
          <h1 className="ma3">{thing.title}</h1>
          <button onClick={() => {
            props.socket.emit('getConsultant', process.env.ROOM);
          }}
          >
            Вызвать консультанта
          </button>
        </div>
        <div className="content flex">
          <Card/>
          <Capsule/>
        </div>
        <History/>

      </div>
    );
  }
  return (null);
};

const mapStateToProps = state => ({
  thing: state.items.currentItem,
});

export default connect(mapStateToProps, null)(Home);
