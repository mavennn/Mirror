import React from 'react';

import Emoji from '../../components/Emoji/Emoji';
import HeaderContainer from '../../components/Header/HeaderContainer';
import CarouselContainer from '../../components/Carousel/CarouselContainer';
import ThingInfoContainer from '../../components/ThingInfo/ThingInfoContainer';
import AvailableColorsContainer from '../../components/AvailableColors/AvailableColorsContainer';
import AvailableSizesContainer from '../../components/AvailableSizes/AvailableSizesContainer';
import HistoryContainer from '../../components/History/HistoryContainer';
import RecommendationsContainer from '../../components/Recommendations/RecommendationsContainer';
import AddToBasketButtonContainer from '../../components/AddToBasketButton/AddToBasketButtonContainer';
<<<<<<< HEAD
import BringThingButtonContainer from '../../components/BringThingButton/BringThingButtonContainer';
=======
import BringThingButtonContainer from "../../components/BringThingButton/BringThingButtonContainer";
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a

const HomePage = ({ currentThing }) => {
  if (currentThing.ware !== '') {
    return (
      <div>
        <HeaderContainer />
        <div className="homePage">
          <div className="flex">
            <CarouselContainer />
            <ThingInfoContainer />
          </div>
          <div className="flex">
<<<<<<< HEAD
            <div className="choose">
              <AvailableColorsContainer />
              <AvailableSizesContainer />
            </div>
            <div className="buttons">
              <AddToBasketButtonContainer />
              <BringThingButtonContainer />
            </div>
            {/*  место для кнопок */}
=======
              <div className="choose">
                <AvailableColorsContainer />
                <AvailableSizesContainer />
              </div>
              <div className="buttons">
                  <AddToBasketButtonContainer />
                  <BringThingButtonContainer />
              </div>
          {/*  место для кнопок */}
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
          </div>
          <div>
            <RecommendationsContainer />
          </div>
          <div>
            <HistoryContainer />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <HeaderContainer />
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

export default HomePage;
