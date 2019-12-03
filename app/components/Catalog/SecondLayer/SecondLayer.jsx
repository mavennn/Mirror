import React from 'react';
import CategoryCard from '../../CatalogCards/CategoryCard';

const SecondLayer = ({ categoriesId }) => {
  return (
    <ul className="flex scroll">
      {categoriesId.map((id) => (
        <li key={id}>
          <CategoryCard categoryId={id} />
        </li>
      ))}
    </ul>
  );
};

export default SecondLayer;
