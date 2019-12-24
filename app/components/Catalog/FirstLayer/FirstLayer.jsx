import React from 'react';
import styles from '../CategoriesList.css';
require('dotenv').config();

const IMAGE_FOLDER = process.env.IMG_FOLDER;

const getImagePath = (categoryId) => `${IMAGE_FOLDER}${String(categoryId)}.jpg`;

const FirstLayer = ({ categories, fetchCategories }) => (
  <ul className={styles.categories_list}>
    {categories.map((category) => (
      <li
        key={category.id}
        className={styles.categories_list__item}
        onClick={() => fetchCategories(category.id)}
      >
        <div className={styles.categories_list__item__image_container}>
          <img
            src={getImagePath(category.id)}
            className={styles.categories_list__item__image}
          />
        </div>
        <div className={styles.categories_list__item_text}>
          <p>{category.name}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default FirstLayer;
