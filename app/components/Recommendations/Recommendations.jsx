import React from 'react';

import ThingCardContainer from '../ThingCard/ThingCardContainer';

const Recommendations = ({ recs }) => {
  if (recs.length === 0) {
    return <div className="list"></div>;
  }
  // return (
  //   <div className="list">
  //     <p>РЕКОМЕНДАЦИИ </p>
  //     <ul>
  //       {recs.map((rec) => (
  //         <li key={rec.barcode}>
  //           <ThingCardContainer item={rec} />
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default Recommendations;
