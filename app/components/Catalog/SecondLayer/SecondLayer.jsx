import React from 'react';
import CategoryCard from '../../CatalogCards/CategoryCard';

const SecondLayer = ({ categoriesId }) => {
  return (
    <ul className="flex scroll">
      {categoriesId.map((id) => (
        <CategoryCard categoryId={id} />
      ))}
    </ul>
  );
};

export default SecondLayer;
