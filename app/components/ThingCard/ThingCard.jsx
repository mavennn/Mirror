import React from 'react';

// let item = {
//   barcode: number,
//   pid: number,
//   name: string,
//   image: string,
//   score: dobule,
//   price: number,
// };

const ThingCard = ({ item, fetchThingInfo }) => (
  <div
    onClick={() => {
      fetchThingInfo(item.barcode);
    }}
  >
    <img src={item.image} />
    <p>{item.name}</p>
  </div>
);

export default ThingCard;
