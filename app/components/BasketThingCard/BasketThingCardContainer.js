import React from 'react';
import { connect } from 'react-redux';

import BasketThingCard from './BasketThingCard';
import { removeFromBasket } from '../../store/actions/basketThingsActions';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const BasketThingCardContainer = ({
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
  <BasketThingCard
    barcode={barcode}
    ware={ware}
    name={name}
    image={image}
    size={size}
    color={color}
    price={price}
    removeFromBasket={removeFromBasket}
    fetchThingInfo={fetchThingInfo}
  />
);

const mapDispatchToProps = {
  fetchThingInfo,
  removeFromBasket,
};

export default connect(null, mapDispatchToProps)(BasketThingCardContainer);
