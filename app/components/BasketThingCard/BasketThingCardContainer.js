import React from 'react';
import { connect } from 'react-redux';

import BasketThingCard from './BasketThingCard';
import { removeFromBasket } from '../../store/actions/basketThingsActions';

const BasketThingCardContainer = ({
                                      barcode,
                                      vendorcode,
                                      title,
                                      size,
                                      color,
                                      price,
                                      removeFromBasket
}) => (
    <BasketThingCard
        barcode={barcode}
        vendorcode={vendorcode}
        title={title}
        size={size}
        color={color}
        price={price}
        removeFromBasket={removeFromBasket}/>
);

const mapDispatchToProps = {
    removeFromBasket,
};

export default connect(null, mapDispatchToProps)(BasketThingCardContainer);