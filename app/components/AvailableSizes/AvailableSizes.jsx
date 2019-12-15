import React, { useEffect } from 'react';

const AvailableSizes = ({ sizes, changeSize }) => {
  useEffect(() => {
    const allSizesButtonsArray = [...document.querySelectorAll('.size-button')];
    allSizesButtonsArray.map((button) => {
      button.addEventListener('click', () => {
        allSizesButtonsArray.map((size) => {
          size.style.borderBottom = '0px';
        });
        button.style.borderBottom = '3px solid greenyellow';
      });
    });
  });

  return (
    <div className="sizes">
      <p>
        <strong>Выберите размер: </strong>
      </p>
      <ul className="choose-list scroll">
        {sizes.map((size) => (
          <li key={size}>
            <button className="size-button" onClick={() => changeSize(size)}>
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableSizes;
