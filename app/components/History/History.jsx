import React from 'react';

import ThingCardContainer from '../ThingCard/ThingCardContainer';

const History = ({ historyThings }) => (
  <div className="list">
    <p>ПРОСМОТРЕННОЕ </p>
    <ul>
      {historyThings.map((item) => (
        <li key={item.barcode + item.name}>
          <ThingCardContainer item={item} />
        </li>
      ))}
    </ul>
  </div>
);

export default History;
