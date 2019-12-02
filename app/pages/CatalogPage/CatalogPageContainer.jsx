import React from 'react';
import { connect } from 'react-redux';

import CatalogPage from './CatalogPage';
import { toggleGender } from '../../store/actions/catalogActions';

const CatalogPageContainer = ({ status, toggleGender }) => (
  <CatalogPage status={status} toggleGender={toggleGender} />
);

const mapStateToProps = (state) => ({
  status: state.catalog.status,
});

const mapDispatchToProps = {
  toggleGender,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogPageContainer);
