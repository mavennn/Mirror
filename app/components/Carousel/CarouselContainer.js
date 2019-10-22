import React from 'react';
import { connect } from 'react-redux';

import Carousel from './Carousel';

const CarouselContainer = ({ vendorcode }) => (
  <Carousel
    vendorcode={vendorcode}
  />
);

const mapStateToProps = (state) => ({
    vendorcode: state.currentThing.vendorcode
});

export default connect(mapStateToProps, null)(CarouselContainer);