import React from 'react';
import routes from '../../constants/routes';


const BasketList = ({ basketThings, setThing, history }) => (
  <ul className="basketList">
    {
          basketThings.map(item => (
            <li
              key={item.barcode + item.size}
              onClick={() => {
                setThing(item.barcode);
                history.push(routes.HOME);
              }}
            >
              <img src={require('../../assets/img/template.jpg')} onClick={() => setThing(item.barcode)} />
              <div className="basket-description">
                <p className="title">{item.title}</p>
                <em className="brand">{item.brand}</em>
                <p className="size">{item.size}</p>
                <p className="price">{item.oldprice}</p>
              </div>
            </li>
          ))
        }
  </ul>
);

export default BasketList;
