import React, {useEffect} from 'react';

const List = ({ title, thing, list, setThing }) => (
  <div className="list">
    <h1>{title}</h1>
    <ul>
      {
        list.map(item => (
          <li key={item.barcode} onClick={() => setThing(item.barcode)}>
                <img src={item.img_base64} />
                <p>{item.title}</p>
              </li>
        ))    
        }
    </ul>
  </div>
);

export default List;
