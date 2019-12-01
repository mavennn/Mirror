import React from 'react';
import { connect } from 'react-redux';

import ThingInfo from './ThingInfo';

const ThingInfoContainer = ({ title, brand, price }) => (
  <ThingInfo title={title} brand={brand} price={price} />
);

const mapStateToProps = state => ({
  title: state.currentThing.name,
  brand: state.currentThing.brand,
  price: state.currentThing.price
});

export default connect(mapStateToProps, null)(ThingInfoContainer);
