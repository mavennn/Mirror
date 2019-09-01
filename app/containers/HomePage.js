import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Home/Carousel';
import Info from '../components/Home/Info';
import Choose from '../components/Home/Choose';
import Buttons from '../components/Home/Buttons';
import List from '../components/List';
import Emoji from '../components/Emoji';

import { addToBasketThunkCreator, setCurrentThingThunkCreator, changeColorThunkCreator, changeSizeThunkCreator } from '../reducers/things';

// eslint-disable-next-line react/prop-types
const HomePage = ({
  currentThing, historyThings, capsule, setCurrentThingThunkCreator, addToBasketThunkCreator, changeColorThunkCreator, changeSizeThunkCreator
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
              thing={currentThing}
              addToBasket={addToBasketThunkCreator}
            />
          </div>
          <div>
            <List title="Рекомендации" list={capsule} />
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
  setCurrentThingThunkCreator,
  addToBasketThunkCreator,
  changeSizeThunkCreator,
  changeColorThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
