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
  <div onClick={() => fetchThingInfo(item.ware)}>
    <img src={item.picture}/>
    <p>{item.name}</p>
    <p>{item.price}</p>
  </div>
);

export default ThingCard;
