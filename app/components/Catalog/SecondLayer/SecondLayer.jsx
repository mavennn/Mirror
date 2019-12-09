import React from 'react';
import CategoryCard from '../../CatalogCards/CategoryCard';

const SecondLayer = ({ categories }) => {
  return (
    <ul className="main-catalog-container">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <CategoryCard category={category} />
          </li>
        );
      })}
    </ul>
  );
};

export default SecondLayer;
