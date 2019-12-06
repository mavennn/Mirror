import React from 'react';
import { connect } from 'react-redux';
import { fetchThings } from '../../store/actions/catalogActions';

const CategoryCard = ({ category, fetchThings }) => {
  return (
    <div
      className="border category-card"
      onClick={() => fetchThings(category.id)}
    >
      <h4>{category.name}</h4>
    </div>
  );
};

const mapDispatchToProps = {
  fetchThings,
};

export default connect(null, mapDispatchToProps)(CategoryCard);
