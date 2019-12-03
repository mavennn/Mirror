import React, { useEffect } from 'react';
import HeaderContainer from '../../components/Header/HeaderContainer';

import FirstLayerContainer from '../../components/Catalog/FirstLayer/FirstLayerContainer';
import SecondLayerContainer from '../../components/Catalog/SecondLayer/SecondLayerContainer';
import ThirdLayerContainer from '../../components/Catalog/ThirdLayer/ThirdLayerContainer';

// Мужская одежда 21589
// Мужская обувь 21652
// Женская одежда 21435
// Женская обувь 21662
// Одежда для девочек 21455
// Обувь для девочек 21683
// Одежда для мальчиков 21602
// Обувь для мальчиков 21673

const mainCatalogRenderer = (status) => {
  switch (status) {
    case 1:
      return <FirstLayerContainer />;
    case 2:
      return <SecondLayerContainer />;
    case 3:
      return <ThirdLayerContainer />;
    default:
      return null;
  }
};

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

const CatalogPage = ({ status, toggleGender }) => {
  useEffect(() => {
    buttonsHighlighting();
  });

  return (
    <>
      <HeaderContainer />
      <div className="first-layer-containter">
        <div className="buttons">
          <div className="gender-button" onClick={() => toggleGender('male')}>
            Мужчинам
          </div>
          <div className="gender-button" onClick={() => toggleGender('female')}>
            Женщинам
          </div>
          <div className="gender-button" onClick={() => toggleGender('child')} style={{ borderBottom: '3px solid greenyellow' }}>
            Детям
          </div>
        </div>
      </div>
      {mainCatalogRenderer(status)}
    </>
  );
};

export default CatalogPage;
