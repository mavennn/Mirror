import React from 'react';

import Emoji from '../../components/Emoji/Emoji';
import HeaderContainer from '../../components/Header/HeaderContainer';
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import ThingInfoContainer from '../../components/ThingInfo/ThingInfoContainer';
import AvailableColorsContainer from "../../components/AvailableColors/AvailableColorsContainer";
import AvailableSizesContainer from "../../components/AvailableSizes/AvailableSizesContainer";
import HistoryContainer from "../../components/History/HistoryContainer";
import RecommendationsContainer from "../../components/Recommendations/RecommendationsContainer";
import AddToBasketButtonContainer from '../../components/AddToBasketButton/AddToBasketButtonContainer';

const HomePage = ({ currentThing }) => {
  if (currentThing.barcode !== "") {
    return (
      <div>
        <HeaderContainer />
        <div className="homePage">
          <div className="flex">
            <CarouselContainer />
            <ThingInfoContainer />
          </div>
          <div className="flex">
              <div className="choose">
                <AvailableColorsContainer />
                <AvailableSizesContainer />
              </div>
              <div className="buttons">
                  <AddToBasketButtonContainer />
                  {/*<BringThingButtonContainer />*/}
              </div>
          {/*  место для кнопок */}
          </div>
          <div>
            <HistoryContainer />
          </div>
          <div>
            <RecommendationsContainer />
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
