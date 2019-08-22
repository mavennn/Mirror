import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import sockets from '../../constants/sockets';
import { getConsultantThunkCreator } from '../../reducers/items';

import Capsule from './Capsule';
import History from './History';
import Card from './Card';

const Home = ({ thing, getConsultantThunkCreator }) => {
  if (Object.keys(thing).length !== 0) {
    return (
      <div>
        <Header />
        <div className="flex justify-between">
          <h1 className="ma3">{thing.title}</h1>
          <button onClick={() => getConsultantThunkCreator(sockets.CALL_CONSULTANT)}>
            Вызватьконсультанта
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
});

export default connect(mapStateToProps, { getConsultantThunkCreator })(Home);
