import React, { useEffect } from 'react';
import HeaderContainer from '../../components/Header/HeaderContainer';

import CategoriesListContainer from '../../components/CategoriesList/CategoriesListContainer';

// Мужская одежда 21589
// Мужская обувь 21652
// Женская одежда 21435
// Женская обувь 21662
// Одежда для девочек 21455
// Обувь для девочек 21683
// Одежда для мальчиков 21602
// Обувь для мальчиков 21673

const manBlocks = (fetchCategories) => (
  <div className="buttons">
    <div className="second-layer-button" onClick={() => fetchCategories(21589)}>
      {' '}
      Мужская одежда
      {' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21652)}>
      {' '}
      Мужская обувь
      {' '}
    </div>
  </div>
);
const womanBlocks = (fetchCategories) => (
  <div className="buttons">
    <div className="second-layer-button" onClick={() => fetchCategories(21435)}>
      {' '}
      Женская одежда
      {' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21662)}>
      {' '}
      Женская обувь
      {' '}
    </div>
  </div>
);
const childrenBlocks = (fetchCategories) => (
  <div className="buttons width100">
    <div className="second-layer-button" onClick={() => fetchCategories(21455)}>
      {' '}
      Одежда для девочек
      {' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21683)}>
      {' '}
      Одежда для мальчиков
      {' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21602)}>
      {' '}
      Обувь для мальчиков
      {' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21673)}>
      {' '}
      Обувь для девочек
      {' '}
    </div>
  </div>
);

const renderBlock = (gender, fetchCategories) => {
  switch (gender) {
    case 'male':
      return manBlocks(fetchCategories);
    case 'female':
      return womanBlocks(fetchCategories);
    case 'child':
      return childrenBlocks(fetchCategories);
    default:
      return childrenBlocks(fetchCategories);
  }
};

const buttonsHighlighting = () => {
  const buttons = [...document.querySelectorAll('.gender-button')];
  buttons.map((button) => {
    button.addEventListener('click', () => {
      buttons.map((color) => {
        color.style.borderBottom = '0px';
      });
      button.style.borderBottom = '5px solid greenyellow';
    });
  });
};

const CatalogPage = ({
  gender, toggleGender, fetchCategories, categories,
}) => {
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
          <div className="gender-button" onClick={() => toggleGender('child')}>
            Детям
          </div>
        </div>
      </div>
      {
          categories.length === 0
              ? (
                <div className="second-layer-container">
                  {renderBlock(gender, fetchCategories)}
                </div>
              )
              : <CategoriesListContainer />
        }

    </>
  );
};

export default CatalogPage;
