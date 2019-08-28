import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Card from '../components/Home/Card';
import List from '../components/List';
import Emoji from "../components/Emoji";

// eslint-disable-next-line react/prop-types
const HomePage = ({ currentThing, historyThings, recs }) => {
  if (Object.keys(currentThing).length !== 0) {
    return (
      <div>
        <Header />
        <div className="content">
          <Card thing={currentThing} />
          <footer className="flex">
            <List title="Рекомендации" list={recs} />
            <List title="Просмотренное" list={historyThings} />
          </footer>
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <Header />
      <div className="waiting">
        <p>Чтобы начать работу, отсканируйте штрихкод<Emoji symbol="👗"/><Emoji symbol="👉"/></p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentThing: state.things.currentThing,
  historyThings: state.things.historyThings,
  recs: state.things.recs,
});

export default connect(mapStateToProps, null)(HomePage);
