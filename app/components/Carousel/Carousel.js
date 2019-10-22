import React from 'react';

// require('dotenv').config();
// const SERVER = process.env.SERVER_ADDRESS || '192.168.1.231';
// const PORT = process.env.SERVER_PORT || '3123';

import Env from '../../utils';
const env = new Env();

const Carousel = ({ vendorcode }) => {
  return(
    <div className="flex">
      <div className="slider-for">
        <div><img src={`http://${env.getServer()}:${env.getPort()}/images/${vendorcode}-01.jpg`} alt="pic" className="picture-1" /></div>
      </div>
    </div>
  );
};

export default Carousel;
