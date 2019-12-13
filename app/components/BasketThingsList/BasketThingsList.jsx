import React from 'react';
import routes from '../../constants/routes';
import * as trash from '../../assets/icons/trash.svg';

import BasketThingCardContainer from '../BasketThingCard/BasketThingCardContainer';

const BasketThingsList = ({ basketThings }) => {
  return (
    <ul className="basketList">
      {basketThings.map(item => (
        <BasketThingCardContainer
          barcode={item.barcode}
          ware={item.ware}
          image={item.image}
          name={item.name}
          size={item.size}
          color={item.color}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default BasketThingsList;
