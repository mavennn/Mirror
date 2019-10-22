import React from 'react';
import Env from '../../utils';
const env = new Env();

/*
* item = {
*   barcode: '8050567312312',
*   vendorcode: 'E035VDF1353.900',
*   title: 'Юбка женская',
*   price: 3000,
* }/
* */


const ThingCard = ({ item, fetchThingInfo }) => (
    <div onClick={() => fetchThingInfo(item.barcode)}>
        <img
            src={`http://${env.getServer()}:${env.getPort()}/images/${item.vendorcode}-01.jpg`}
        />
        <>{item.title}</>
        <p>{item.price}</p>
    </div>
);

export default ThingCard;