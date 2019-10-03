import React from 'react';
import routes from '../../constants/routes';
import * as trash from '../../assets/icons/trash.svg';

const BasketList = ({ basketThings, setThing, history, remove }) => (
  <ul className="basketList">
    {
          basketThings.map(item => (
            <li key={item.barcode + item.size}>
              <img
                src={item.img_base64}
                onClick={() => {
                  setThing(item.barcode);
                  history.push(routes.HOME);
                }}
              />
              <div className="basket-description">
                <p className="title">{item.title}</p>
                <em className="brand">{item.brand}</em>
                <p className="size">{item.size}</p>
                <p className="price">{item.price}</p>
                <p className="color">{item.color}</p>
                <div className="remove">
                  <img src={trash} alt="trash" onClick={() => remove(item)} />
                </div>
              </div>
            </li>
          ))
        }
  </ul>
);

export default BasketList;
