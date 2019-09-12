import React from 'react';

const Carousel = ({ thing }) => {

  const imagesLinks = [];
  const images = [];

  const fillingImagesLinksArray = (imagesLinks) => {
    for (let i = 0; i < 4; i++) {
      imagesLinks[i] = `../../assets/images/${thing.vendorid}-0${i+1}.jpg`
    }
  }

  const output = (imagesLinks) => {
    for (let i = 0; i < 4; i++) {
      console.log(imagesLinks[i]);
    }
  }

  const fillingImagesArray = (images, imagesLinks) => {
    for (let i = 0; i < 4; i++) {
      try {
        images[i] = require(imagesLinks[i]);
      } catch (e) {
        images[i] = require('../../assets/img/no_image.jpg')
      }
    }
  }

  fillingImagesLinksArray(imagesLinks);
  output(imagesLinks);
  fillingImagesArray(images, imagesLinks);

  return(
    <div className="flex">
      <div className="slider-for">
        <div><img src={images[0]} alt="pic" className="picture-1" /></div>
      </div>
      <div className="slider-nav">
        {
          images.slice(1).map(img => (
            <div key={(Math.random()*10000000099) - 9999999999}><img src={img} alt="pic" className="small-picture" /></div>
          ))
        }
      </div>
    </div>
  );
};

export default Carousel;
