import React, { useEffect } from 'react';

const Info = ({ thing }) => {
  return (
    <div className="info">
        <h2>{ thing._title }</h2>
        <h3>{ thing._brand }</h3>
        <h4>{ thing._price } руб.</h4>
    </div>
  );
};

export default Info;
