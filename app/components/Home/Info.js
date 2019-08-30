import React from 'react';

const Info = ({ thing }) => (
  <div className="info">
      <div>
        <h2>{thing.title}</h2>
      </div>
      <div>
        <h3>{thing.brand}</h3>
      </div>
      <div>
          <h1>{thing.newprice}</h1>
      </div>
  </div>
);

export default Info;
