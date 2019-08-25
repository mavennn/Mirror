import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ thing, addToBasketThunkCreator, getConsultantThunkCreator }) => {
  return (
      <h1>{ thing.model }</h1>
  )
}

Card.defaultProps = {
  thing: PropTypes.object,
  addToBasketThunkCreator: PropTypes.func,
  getConsultantThunkCreator: PropTypes.func,
};

Card.propTypes = {
  thing: PropTypes.object,
  addToBasketThunkCreator: PropTypes.func,
  getConsultantThunkCreator: PropTypes.func,
};

export default Card;
