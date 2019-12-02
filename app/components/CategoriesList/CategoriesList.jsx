import React from "react";

import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesList = ({ categoriesIds }) => (
  <ul className="flex scroll">
    {categoriesIds.map(id => (
      <CategoryCard id={id} />
      ))}
  </ul>
);

export default CategoriesList;
