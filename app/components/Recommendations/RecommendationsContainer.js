import React from 'react';
import { connect } from 'react-redux';

import Recommendations from './Recommendations';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const RecommendationsContainer = ({ recs, fetchThingInfo }) => (
  <Recommendations recs={recs} fetchThingInfo={fetchThingInfo} />
);

const mapStateToProps = (state) => ({
  recs: state.currentThing.recs,
});

export default connect(mapStateToProps, { fetchThingInfo })(
  RecommendationsContainer
);
