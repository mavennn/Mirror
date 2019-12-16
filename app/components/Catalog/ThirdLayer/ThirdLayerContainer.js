import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ThirdLayer from './ThirdLayer';
import { fetchThingInfo } from '../../../store/actions/сurrentThingActions';

const ThirdLayerContainer = ({ things, fetchThingInfo }) => (
  <ThirdLayer things={things} fetchThingInfo={fetchThingInfo} />
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

export default connect(mapStateToProps, { fetchThingInfo })(
  ThirdLayerContainer
);
