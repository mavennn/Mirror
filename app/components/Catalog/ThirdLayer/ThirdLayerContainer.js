import React from 'react';
import { connect } from 'react-redux';

import ThirdLayer from './ThirdLayer';

const ThirdLayerContainer = ({ thingsIds }) => (
  <ThirdLayer thingsIds={thingsIds} />
);

const mapStateToProps = (state) => ({
  thingsIds: state.catalog.allThings,
});

export default connect(mapStateToProps, null)(ThirdLayerContainer);
