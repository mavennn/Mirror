import React from 'react';

const manBlocks = (fetchCategories) => (
  <div className="buttons">
    <div className="second-layer-button" onClick={() => fetchCategories(21589)}>
      {' '}
      Мужская одежда{' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21652)}>
      {' '}
      Мужская обувь{' '}
    </div>
  </div>
);

const womanBlocks = (fetchCategories) => (
  <div className="buttons">
    <div className="second-layer-button" onClick={() => fetchCategories(21435)}>
      {' '}
      Женская одежда{' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21662)}>
      {' '}
      Женская обувь{' '}
    </div>
  </div>
);

const childrenBlocks = (fetchCategories) => (
  <div className="buttons width100">
    <div className="second-layer-button" onClick={() => fetchCategories(21455)}>
      {' '}
      Одежда для девочек{' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21683)}>
      {' '}
      Одежда для мальчиков{' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21602)}>
      {' '}
      Обувь для мальчиков{' '}
    </div>
    <div className="second-layer-button" onClick={() => fetchCategories(21673)}>
      {' '}
      Обувь для девочек{' '}
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

const FirstLayer = ({ gender, fetchCategories }) => renderBlock(gender, fetchCategories);

export default FirstLayer;
