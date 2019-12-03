import React from 'react';

import ThingCardContainer from '../ThingCard/ThingCardContainer';

const History = ({ historyThings }) => (
  <div className="list">
    <p>ПРОСМОТРЕННОЕ </p>
    <ul>
      {historyThings.map(thing => (
        <li key={thing.ware}>
          <ThingCardContainer item={thing} />
        </li>
      ))}
    </ul>
  </div>
);

export default History;
