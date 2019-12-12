import React from 'react';
import * as trash from '../../assets/icons/trash.svg';

require('dotenv').config();

const SERVER = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const BasketThingCard = ({
  barcode,
  vendorcode,
  title,
  size,
  color,
  price,
  removeFromBasket
}) => (
  <li
    key={barcode + size}
    onClick={() => {
      fetchThingInfo(barcode, 'barcode');
      // history.push(routes.HOME);
    }}
  >
    <img
      src={`http://${SERVER}:${PORT}/images/${vendorcode}-01.jpg`}
      alt="pic"
    />
    <div className="basket-description">
      <p className="title">{title}</p>
      <p className="size">{size}</p>
      <p className="price">{price}</p>
      <p className="color">{color}</p>
      <div className="remove">
        <img
          src={trash}
          alt="trash"
          onClick={() => removeFromBasket(vendorcode, size)}
        />
      </div>
    </div>
  </li>
);

export default BasketThingCard;
