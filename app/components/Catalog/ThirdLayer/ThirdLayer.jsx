import React, { useEffect } from 'react';
import ThingCard from '../../CatalogCards/ThingCard';

const ThingLayer = ({ thingsIds }) => {
  // useEffect(() => console.log(thingsIds), [])
  return (
    <ul className="flex scroll">
      {thingsIds.map((id) => (
        <ThingCard thingId={id} />
      ))}
    </ul>
  );
}


export default ThingLayer;
