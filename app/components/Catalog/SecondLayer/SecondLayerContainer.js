import React from 'react';
import { connect } from 'react-redux';

import SecondLayer from './SecondLayer';

const SecondLayerContainer = ({ categories }) => {
  return <SecondLayer categories={categories} />;
};

const mapStateToProps = (state) => ({
  categories: state.catalog.categories,
});

export default connect(mapStateToProps, null)(SecondLayerContainer);
