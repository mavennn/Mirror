import React, { useContext } from 'react';
import { connect } from 'react-redux';

import ThingCard from './ThingCard';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const ThingCardContainer = ({ item, fetchThingInfo }) => (
  <ThingCard item={item} fetchThingInfo={fetchThingInfo} />
);

const mapDispatchToProps = {
  fetchThingInfo,
};

export default connect(null, mapDispatchToProps)(ThingCardContainer);
