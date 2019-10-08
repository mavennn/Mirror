import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Home/Carousel';
import Info from '../components/Home/Info';
import Choose from '../components/Home/Choose';
import Buttons from '../components/Home/Buttons';
import List from '../components/List';
import Emoji from '../components/Emoji';

import {
  getConsultantThunkCreator,
  setCurrentThingThunkCreator,
  addToBasketThunkCreator,
  changeSizeThunkCreator,
  changeColorThunkCreator,
} from '../reducers/things';

// eslint-disable-next-line react/prop-types
const HomePage = ({
  getConsultantThunkCreator,
  setCurrentThingThunkCreator,
  addToBasketThunkCreator,
  changeSizeThunkCreator,
  changeColorThunkCreator,
  currentThing,
  historyThings,
  capsule,
}) => {
  if (Object.keys(currentThing).length !== 0) {
    return (
      <div>
        <Header />
        <div className="homePage">
          <div className="flex">
            <Carousel thing={currentThing} />
            <Info thing={currentThing} />
          </div>
          <div className="flex">
            <Choose
              thing={currentThing}
              changeSize={changeSizeThunkCreator}
              changeColor={changeColorThunkCreator}
            />
            <Buttons
              getConsultant={getConsultantThunkCreator}
              addToBasket={addToBasketThunkCreator}
              thing={currentThing}
            />
          </div>
          <div>
            <List 
              title="Рекомендации" 
              list={currentThing._recommendations}
              setThing={setCurrentThingThunkCreator}
            />
          </div>
          <div>
            <List
              title="Просмотренное"
              list={historyThings}
              setThing={setCurrentThingThunkCreator}
            />
          </div>
        </div>
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

const mapDispatchToProps = {
  getConsultantThunkCreator,
  setCurrentThingThunkCreator,
  addToBasketThunkCreator,
  changeSizeThunkCreator,
  changeColorThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
