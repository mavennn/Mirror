import React from 'react';

const List = ({ title, list, setThing }) => (
  <div className="list">
    <h1>{title}</h1>
    <ul>
      {
        list.map(item => (
          <li key={item.barcode} onClick={() => setThing(item.barcode)}>
            <img src={require('../assets/img/template.jpg')} />
            <p>{item.title}</p>
          </li>
        ))
      }
    </ul>
  </div>
);

export default List;
