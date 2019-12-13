import React from 'react';
import { connect } from 'react-redux';

import History from './History';

const HistoryContainer = ({ historyThings }) => (
  <History historyThings={historyThings} />
);

const mapStateToProps = (state) => ({
  historyThings: state.currentThing.history,
});

export default connect(mapStateToProps, null)(HistoryContainer);
