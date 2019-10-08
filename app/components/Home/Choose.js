import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

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
    case 'Коричневый':
      return 'brown';
    default:
      return null;
  }
};

const Choose = ({ thing, changeSize, changeColor }) => {

  return (
    <div className="choose">
      <div className="sizes">
        <p><strong>Выберите размер: </strong></p>
        <ul className="choose-list">
          {
                thing._availableSizes.map(s => (
                  <li key={s}>
                    <button className="size-button" onClick={() => changeSize(s)}>{s}</button>
                  </li>
                ))
            }
        </ul>
      </div>
      <div className="colors">
        <p><strong>Выберите цвет: </strong></p>
        <ul className="choose-list">
          {
                  thing._availableColors.map(c => (
                    <li key={c}>
                      <button>
                        <div
                          className="color-button"
                          style={{ backgroundColor: `${getColorCode(c)}` }}
                          onClick={() => changeColor(c)}
                        />
                      </button>
                    </li>
                  ))
              }
        </ul>
      </div>
    </div>
  )
};

Choose.propTypes = {
  changeSize: PropTypes.func,
  changeColor: PropTypes.func,
}

Choose.defaultProps = {
  changeSize: () => {},
  changeColor: () => {},
}

export default Choose;
