import React, { useEffect } from 'react';

const ThingInfo = ({ title, brand, price }) => (
  <div className="info">
    <h2>{title}</h2>
    <h3>{brand}</h3>
    {/*{price !== {} ? <h4>{ price } руб.</h4> : null}*/}
  </div>
);

export default ThingInfo;
