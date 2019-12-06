import React, { useEffect } from 'react';
import ThingCard from '../../CatalogCards/ThingCard';

const ThirdLayer = ({ things }) => {
  // useEffect(() => console.log(thingsIds), [])
  return (
    <ul className="flex scroll">
      {things.map((thing) => (
        <li key={thing.ware}>
          <ThingCard thing={thing} />
        </li>
      ))}
    </ul>
  );
};

export default ThirdLayer;
