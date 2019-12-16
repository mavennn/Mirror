import React from 'react';
import styles from './HomePage.css';

import Emoji from '../../components/Emoji/Emoji';
import HeaderContainer from '../../components/Header/HeaderContainer';
import CarouselContainer from '../../components/Carousel/CarouselContainer';
import ThingInfoContainer from '../../components/ThingInfo/ThingInfoContainer';
import AvailableColorsContainer from '../../components/AvailableColors/AvailableColorsContainer';
import AvailableSizesContainer from '../../components/AvailableSizes/AvailableSizesContainer';
import HistoryContainer from '../../components/History/HistoryContainer';
import RecommendationsContainer from '../../components/Recommendations/RecommendationsContainer';
import AddToBasketButtonContainer from '../../components/AddToBasketButton/AddToBasketButtonContainer';
import BringThingButtonContainer from '../../components/BringThingButton/BringThingButtonContainer';

const HomePage = ({ currentThing }) => {
  if (currentThing.ware !== '') {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        <div className={styles.main}>
          <CarouselContainer />
          <ThingInfoContainer />
          <div className={styles.colors_and_sizes}>
            <Availagit bleColorsContainer />
            <AvailableSizesContainer />
          </div>
          <div className={styles.user_buttons}>
            <AddToBasketButtonContainer />
            <BringThingButtonContainer />
          </div>
        </div>
        <div className={styles.footer}>
          <RecommendationsContainer />
          <HistoryContainer />
        </div>
      </div>
    );
  }
  if (currentThing.isFetching) {
    return <div>loader</div>;
  }
  return (
    <div className={styles.container}>
      <HeaderContainer />
      <div className={styles.waiting}>
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
