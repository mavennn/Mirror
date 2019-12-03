import React, { useEffect } from 'react';
import ThingCard from '../../CatalogCards/ThingCard';

const ThirdLayer = ({ thingsIds }) => {
  // useEffect(() => console.log(thingsIds), [])
  return (
    <ul className="flex scroll">
      {thingsIds.map((id) => (
        <li key={id}>
          <ThingCard thingId={id} />
        </li>
      ))}
    </ul>
  );
};

export default ThirdLayer;
