import React from 'react';

const List = ({ title, list }) => (
  <div id="list">
    <h1>{title}</h1>
    <ul>
      {
        list.map(item => (
          <li key={item.id}>
            <img src={item.pictures} />
            <p>{item.model}</p>
          </li>
        ))
      }
    </ul>
  </div>
);

export default List;
