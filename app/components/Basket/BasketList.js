import React from 'react';
import routes from '../../constants/routes';
import * as trash from '../../assets/icons/trash.svg';

const BasketList = ({ basketThings, setThing, history, remove }) => {
  return (
    <ul className="basketList">
      {
            basketThings.map(item => (
              <li key={item._barcode + item._size}>
                <img
                  src={item._img_base64}
                  onClick={() => {
                    setThing(item._barcode);
                    history.push(routes.HOME);
                  }}
                />
                <div className="basket-description">
                  <p className="title">{item._title}</p>
                  <em className="brand">{item._brand}</em>
                  <p className="size">{item._size}</p>
                  <p className="price">{item._price}</p>
                  <p className="color">{item._color}</p>
                  <div className="remove">
                    <img src={trash} alt="trash" onClick={() => remove(item)} />
                  </div>
                </div>
              </li>
            ))
          }
    </ul>
  );
};

export default BasketList;
