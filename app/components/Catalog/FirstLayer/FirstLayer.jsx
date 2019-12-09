import React from 'react';
import PropTypes from 'prop-types';

const FirstLayer = ({ categories, fetchCategories }) => (
  <ul className="main-catalog-container ">
    {categories.map((category) => (
      <li key={category.id}>
        <div
          className="border category-card"
          onClick={() => fetchCategories(category.id)}
        >
          <h4>{category.name}</h4>
        </div>
      </li>
    ))}
  </ul>
);

FirstLayer.propTypes = {
  fetchCategories: PropTypes.func,
  categories: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

FirstLayer.defaultProps = {
  fetchCategories: () => {},
  categories: [
    {
      id: 21589,
      name: 'Мужская одежда',
    },
  ],
};

export default FirstLayer;
