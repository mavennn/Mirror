import React from 'react';
import { connect } from 'react-redux';

import CategoriesList from './CategoriesList';

const CategoriesListContainer = ({ categories }) => <CategoriesList categoriesIds={categories}/>;

const mapStateToProps = (state) => ({
   categories: state.catalog.categories,
});

export default connect(mapStateToProps)(CategoriesListContainer);
