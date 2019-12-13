import React from 'react';
import { connect } from 'react-redux';

import Recommendations from './Recommendations';

const RecommendationsContainer = ({ recs }) => {
  return <Recommendations recs={recs} />;
};

const mapStateToProps = (state) => ({
  recs: state.currentThing.recs,
});

export default connect(mapStateToProps, null)(RecommendationsContainer);
