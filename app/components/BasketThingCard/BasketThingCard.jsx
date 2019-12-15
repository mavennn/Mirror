import React from 'react';
import * as trash from '../../assets/icons/trash.svg';
import { history } from '../../store/configureStore';
import routes from '../../constants/routes';

const BasketThingCard = ({
  barcode,
  ware,
  name,
  image,
  size,
  color,
  price,
  removeFromBasket,
  fetchThingInfo,
}) => (
  <li key={barcode + size}>
    <img
      src={image}
      alt="pic"
      onClick={() => {
        fetchThingInfo(barcode);
        history.push(routes.HOME);
      }}
    />
    <div className="basket-description">
      <p className="title">{name}</p>
      <p className="size">{size}</p>
      <p className="price">{price}</p>
      <p className="color">{color}</p>
      <div className="remove">
        <img
          src={trash}
          alt="trash"
          onClick={() => removeFromBasket(ware, size)}
        />
      </div>
    </div>
  </li>
);

export default BasketThingCard;
