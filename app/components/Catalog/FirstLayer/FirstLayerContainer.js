import React from 'react';
import { connect } from 'react-redux';

import FirtsLayer from './FirstLayer';
import { fetchCategories } from '../../../store/actions/catalogActions';

const FirstLayerContainer = ({ gender, fetchCategories }) => (
  <FirtsLayer gender={gender} fetchCategories={fetchCategories} />
);

const mapStateToProps = (state) => ({
  gender: state.catalog.gender,
});

const mapDispatchToProps = {
  fetchCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstLayerContainer);
