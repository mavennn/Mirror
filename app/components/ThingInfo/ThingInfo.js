import React, { useEffect } from 'react';

const ThingInfo = ({ title, brand, price }) => (
  <div className="info">
    <h2>{title}</h2>
    <h3>{brand}</h3>
    <h4>{price} руб.</h4>
  </div>
);

export default ThingInfo;
