import React, { useEffect } from 'react';
import getColorCode from '../../helpers/color-square';

const AvailableColors = ({ colors, changeColor, getColorCode }) => {
  useEffect(() => {
    const allColorsButtonsArray = [
      ...document.querySelectorAll('.color-button'),
    ];
    allColorsButtonsArray.map((button) => {
      button.addEventListener('click', () => {
        allColorsButtonsArray.map((color) => {
          color.style.borderBottom = '0px';
        });
        button.style.borderBottom = '3px solid greenyellow';
      });
    });
  });

  return (
    <div className="colors">
      <p>
        <strong>Выберите размер: </strong>
      </p>
      <ul className="choose-list">
        {colors.map((color) => (
          <li key={color}>
            <button className="color-button" style={{ backgroundColor: getColorCode(color) }} onClick={() => changeColor(color)}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableColors;
