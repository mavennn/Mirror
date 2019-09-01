import React from 'react';

const Carousel = ({ thing }) => (
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

export default Carousel;
