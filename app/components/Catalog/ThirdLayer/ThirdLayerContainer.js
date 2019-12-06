import React from 'react';
import { connect } from 'react-redux';

import ThirdLayer from './ThirdLayer';

const ThirdLayerContainer = ({ things }) => (
  <ThirdLayer things={things} />
);

const mapStateToProps = (state) => ({
  things: state.catalog.allThings,
});

export default connect(mapStateToProps, null)(ThirdLayerContainer);
