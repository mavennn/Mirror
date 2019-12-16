import React, { useEffect } from 'react';
import getColorCode from '../../helpers/color-square';
import styles from './AvailableColors.css';

const AvailableColors = ({ colors, changeColor, getColorCode }) => {
  useEffect(() => {
    const allColorsButtonsArray = [
      ...document.querySelectorAll('#colors_list_item'),
    ];
    allColorsButtonsArray.map((button) => {
      button.addEventListener('click', () => {
        allColorsButtonsArray.map((color) => {
          color.style.borderBottom = '0px';
        });
        button.style.borderBottom = '2px solid greenyellow';
      });
    });
  });

  return (
    <div className={styles.available_colors}>
      <div className={styles.available_colors__title}>
        <p>
          <strong>Выберите цвет: </strong>
        </p>
      </div>
      <ul className={styles.available_colors__list}>
        {colors.map((color) => (
          <li id="colors_list_item" key={color} className={styles.available_colors__list_item}>
            <button
              className={styles.available_colors__button}
              style={{ backgroundColor: getColorCode(color) }}
              onClick={() => changeColor(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableColors;
