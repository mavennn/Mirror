import React from 'react';
import env from '../../utils';

/*
 * item = {
 *   title: '8050567312312',
 *   ware: 'E035VDF1353.900',
 *   pid: 'Юбка женская',
 *   price: 3000,
 * }/
 * */

const ThingCard = ({ item, fetchThingInfo }) => (
  // fetchThingInfo(item.barcode)
  <div onClick={() => {}}>
    <img src={item.image}/>
    <p>{item.name}</p>
  </div>
);

export default ThingCard;
