import React from 'react';
import PropTypes from 'prop-types';
import styles from '../CategoriesList.css';

const FirstLayer = ({ categories, fetchCategories }) => (
  <ul className={styles.categories_list}>
    {categories.map((category) => (
      <li
        key={category.id}
        className={styles.categories_list__item}
        onClick={() => fetchCategories(category.id)}
      >
        <div className={styles.categories_list__item__image_container}>
          <img className={styles.categories_list__item__image} />
        </div>
        <div className={styles.categories_list__item_text}>
          <p>{category.name}</p>
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
