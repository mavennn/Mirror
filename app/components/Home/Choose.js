import React from 'react';

const Choose = ({ thing }) => (
  <div className="choose">
    <div className="sizes">
      <p>Выберите размер: </p>
      <ul className="choose-list">
        {
              thing.sizes.map(s => (
                <li key={s}>
                  <button>{s}</button>
                </li>
              ))
          }
      </ul>
    </div>
    <div className="colors">
      <p>Выберите цвет: </p>
      <ul className="choose-list">
        {
                thing.availableColors.map(c => (
                  <li key={c.barcode}>
                    <button>{c.color}</button>
                  </li>
                ))
            }
      </ul>
    </div>
  </div>
);

export default Choose;
