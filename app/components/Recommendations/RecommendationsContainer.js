import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Recommendations from './Recommendations';

const RecommendationsContainer = ({ recs }) => <Recommendations recs={recs} />;

const mapStateToProps = state => ({
  recs: state.currentThing.recs
});

RecommendationsContainer.propTypes = {
  recsThings: PropTypes.arrayOf(PropTypes.string)
};

RecommendationsContainer.defaultProps = {
  recsThings: ['E012ODF1025.710', 'E026PE71875.890']
};

export default connect(mapStateToProps, null)(RecommendationsContainer);
