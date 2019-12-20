import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ThirdLayer from './ThirdLayer';
import { fetchThingInfo } from '../../../store/actions/сurrentThingActions';
import { selectBrand } from '../../../store/actions/catalogActions';

const ThirdLayerContainer = ({ things, fetchThingInfo, selectBrand }) => (
  <ThirdLayer
    things={things}
    fetchThingInfo={fetchThingInfo}
    selectBrand={selectBrand}
  />
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

export default connect(mapStateToProps, { fetchThingInfo, selectBrand })(
  ThirdLayerContainer
);
