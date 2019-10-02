import React, {useEffect}  from 'react';

const Carousel = ({ thing }) => {

  useEffect(() => {
    console.log(thing.img_base64);
  });

  return(
    <div className="flex">
      <div className="slider-for">
        <div><img src={thing.img_base64} alt="pic" className="picture-1" /></div>
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
