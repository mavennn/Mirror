import React from 'react';
import { connect } from 'react-redux';

import SecondLayer from './SecondLayer';

const SecondLayerContainer = ({ categoriesId }) => (
  <SecondLayer categoriesId={categoriesId} />
);

const mapStateToProps = (state) => ({
  categoriesId: state.catalog.categories,
});

export default connect(mapStateToProps, null)(SecondLayerContainer);
