import React, { useEffect } from 'react';

const Info = ({ thing }) => {
  useEffect (() => {
    console.log(thing)
  });

  return (
  <div className="info">
      <h2>{thing.title}</h2>
      <h3>{thing.brand}</h3>
      <h4>{ thing.price }</h4>
  </div>
  );
};

export default Info;
