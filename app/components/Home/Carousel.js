import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ thing, addToBasketThunkCreator, getConsultantThunkCreator }) => (
  <div className="flex">
    <div className="slider-for">
      <div><img src={require('../../assets/img/template.jpg')} alt="pic" className="picture-1" /></div>
    </div>
    <div className="slider-nav">
      <div><img src={require('../../assets/img/template.jpg')} alt="pic" className="picture-2" /></div>
      <div><img src={require('../../assets/img/template.jpg')} alt="pic" className="picture-3" /></div>
      <div><img src={require('../../assets/img/template.jpg')} alt="pic" className="picture-4" /></div>
    </div>
  </div>
);

Carousel.defaultProps = {
  thing: PropTypes.object,
  addToBasketThunkCreator: PropTypes.func,
  getConsultantThunkCreator: PropTypes.func,
};

Carousel.propTypes = {
  thing: PropTypes.object,
  addToBasketThunkCreator: PropTypes.func,
  getConsultantThunkCreator: PropTypes.func,
};

export default Carousel;
