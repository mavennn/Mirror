import React from 'react';

const Carousel = ({ thing }) => {
  return(
    <div className="flex">
      <div className="slider-for">
        <div><img src={thing._img_base64} alt="pic" className="picture-1" /></div>
      </div>
      {/* <div className="slider-nav">
        {
          images.slice(1).map(img => (
            <div key={(Math.random()*10000000099) - 9999999999}><img src={img} alt="pic" className="small-picture" /></div>
          ))
        }
      </div> */}
    </div>
  );
};

export default Carousel;
