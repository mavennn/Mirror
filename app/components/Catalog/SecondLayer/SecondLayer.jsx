import React from 'react';
import styles from '../CategoriesList.css';
require('dotenv').config();

const IMAGE_FOLDER = process.env.IMG_FOLDER;

const getImagePath = (categoryId) => {
  return `${IMAGE_FOLDER}${String(
    categoryId
  )}.jpg`;
};

const SecondLayer = ({ categories, fetchThings }) => {
  return (
    <ul className={styles.categories_list_second_layer}>
      {categories.map((category) => {
        return (
          <li
            key={category.id}
            onClick={() => fetchThings(category.id)}
            className={styles.categories_list__item}
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
        );
      })}
    </ul>
  );
};

export default SecondLayer;
