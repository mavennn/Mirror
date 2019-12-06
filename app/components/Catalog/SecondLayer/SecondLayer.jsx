import React from 'react';
import CategoryCard from '../../CatalogCards/CategoryCard';

const SecondLayer = ({ categories }) => {
  return (
    <ul className="flex scroll">
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
};

export default SecondLayer;
