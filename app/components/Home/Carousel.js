import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ thing }) => {
  // const imgs = [];
  // for (let i = 0; i < 4; i++) {
  //   try {
  //     imgs.push(require(`../../assets/images/${thing.vendorid}-0${i}.jpg`));
  //   } catch (e) {
  //     imgs.push(require('../../assets/img/template.jpg'));
  //   }
  // }
  return (
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
};

export default Carousel;
