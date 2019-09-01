import React from 'react';

const getColorCode = (color) => {
  switch (color) {
    case 'Белый':
      return 'white';
    case 'Черный':
      return 'black';
    case 'Оранжевый':
      return 'orange';
    case 'Синий':
      return 'blue';
    case 'Зеленый':
      return 'green';
    case 'Розовый':
      return 'pink';
    case 'Серый':
      return 'gray';
    case 'Голубой':
      return 'light-blue';
    case 'Бежевый':
      return 'beige';
    case 'Красный':
      return 'red';
    case 'Бордовый':
      return 'burgundy';
    default:
      return null;
  }
};

const Choose = ({ thing, changeSize }) => (
  <div className="choose">
    <div className="sizes">
      <p><strong>Выберите размер: </strong></p>
      <ul className="choose-list">
        {
              thing.sizes.map(s => (
                <li key={s}>
                  <button onClick={() => changeSize(s)}>{s}</button>
                </li>
              ))
          }
      </ul>
    </div>
    <div className="colors">
      <p><strong>Выберите цвет: </strong></p>
      <ul className="choose-list">
        {
                thing.availableColors.map(c => (
                  <li key={c.barcode}>
                    <button>
                        <div className="color-btn" style={{ backgroundColor: `${getColorCode(c.color)}` }} />
                    </button>
                  </li>
                ))
            }
      </ul>
    </div>
  </div>
);

export default Choose;
