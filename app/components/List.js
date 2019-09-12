import React from 'react';

const List = ({ title, list, setThing }) => (
  <div className="list">
    <h1>{title}</h1>
    <ul>
      {
        list.map(item => {
          let path = `../assets/images/${item.vendorid}-01.jpg`
          let SRC;
          try {
            SRC = require(path);
            return(
              <li key={item.barcode} onClick={() => setThing(item.barcode)}>
                <img src={SRC} />
                <p>{item.title}</p>
              </li>
            )
          } catch (e) {
            SRC = require('../assets/img/no_image.jpg');
            return(
              <li key={item.barcode} onClick={() => setThing(item.barcode)}>
                <img src={SRC} />
                <p>{item.title}</p>
              </li>
            )
          }

          
        })
      }
    </ul>
  </div>
);

export default List;
