import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Home/Carousel';
import Info from '../components/Home/Info';
import List from '../components/List';
import Emoji from '../components/Emoji';

// eslint-disable-next-line react/prop-types
const HomePage = ({ currentThing, historyThings, capsule }) => {
  if (Object.keys(currentThing).length !== 0) {
    return (
      <div>
        <Header />
        <div className="content flex">
          <Carousel thing={currentThing} />
          <Info thing={currentThing} />
          <Choose thing={currentThing} />
        </div>
        <footer className="flex">
          {
                  capsule
                    ? <List title="Рекомендации" list={capsule} />
                    : null
              }
          <List title="Просмотренное" list={historyThings} />
        </footer>
      </div>
    );
  }
  return (
    <div className="home">
      <Header />
      <div className="waiting">
        <p>
Чтобы начать работу, отсканируйте штрихкод
          <Emoji symbol="👗" />
          <Emoji symbol="👉" />
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentThing: state.things.currentThing,
  historyThings: state.things.historyThings,
  capsule: state.things.capsule,
});

export default connect(mapStateToProps, null)(HomePage);
