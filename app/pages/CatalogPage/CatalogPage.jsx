import React, { useEffect } from 'react';
import styles from './CatalogPage.css';

import HeaderContainer from '../../components/Header/HeaderContainer';
import GenderButtonsContainer from '../../components/GenderButtons/GenderButtonsContainer';
import MainCatalogSectionContainer from '../../components/MainCatalogSection/MainCatalogSectionContainer';

// Мужская одежда 21589
// Мужская обувь 21652
// Женская одежда 21435
// Женская обувь 21662
// Одежда для девочек 21455
// Обувь для девочек 21683
// Одежда для мальчиков 21602
// Обувь для мальчиков 21673

const buttonsHighlighting = () => {
  const buttons = [...document.querySelectorAll('.gender-button')];
  buttons.map((button) => {
    button.addEventListener('click', () => {
      buttons.map((color) => {
        color.style.borderBottom = '0px';
      });
      button.style.borderBottom = '3px solid greenyellow';
    });
  });
};

const CatalogPage = ({ status }) => {
  useEffect(() => {
    buttonsHighlighting();
  });

  return (
    <div className={styles.container}>
      <HeaderContainer />
      <GenderButtonsContainer />
      <MainCatalogSectionContainer />
    </div>
  );
};

export default CatalogPage;
