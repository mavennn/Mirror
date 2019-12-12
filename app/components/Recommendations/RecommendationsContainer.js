import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Recommendations from './Recommendations';

require('dotenv').config();
const SERVER = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const RecommendationsContainer = ({ barcode }) => {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    fetch(`http://${SERVER}:${PORT}/thingRecs/${barcode}`)
      .then((response) => response.json())
      .then((data) => setRecs(data));
  }, []);

  return <Recommendations recs={recs} />;
};

const mapStateToProps = (state) => ({
  barcode: state.currentThing.barcode,
});

RecommendationsContainer.propTypes = {
  barcode: PropTypes.number,
};

RecommendationsContainer.defaultProps = {
  barcode: 299101395860,
};

export default connect(mapStateToProps, null)(RecommendationsContainer);
