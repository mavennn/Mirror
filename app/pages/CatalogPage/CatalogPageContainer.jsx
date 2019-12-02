import React from "react";
import { connect } from "react-redux";

import CatalogPage from "./CatalogPage";
import { toggleGender, fetchCategories } from "../../store/actions/catalogActions";

const CatalogPageContainer = ({ gender, toggleGender, fetchCategories, categories }) => (
  <CatalogPage
      gender={gender}
      toggleGender={toggleGender}
      fetchCategories={fetchCategories}
      categories={categories}
  />
);

const mapStateToProps = state => ({
  gender: state.catalog.gender,
  categories: state.catalog.categories,
});

const mapDispatchToProps = {
  toggleGender,
  fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogPageContainer);
