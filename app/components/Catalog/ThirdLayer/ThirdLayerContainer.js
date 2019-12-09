import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ThirdLayer from './ThirdLayer';

const ThirdLayerContainer = ({ things }) => (
  <ThirdLayer things={things} />
);

const mapStateToProps = (state) => ({
  things: state.catalog.allThings,
});

ThirdLayerContainer.propTypes = {
  things: PropTypes.arrayOf(PropTypes.object),
};

ThirdLayerContainer.defaultProps = {
  things: [{}, {}],
};

export default connect(mapStateToProps, null)(ThirdLayerContainer);
