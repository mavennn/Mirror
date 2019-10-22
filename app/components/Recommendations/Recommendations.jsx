import React from 'react';

import ThingCardContainer from '../ThingCard/ThingCardContainer';

const Recommendations = ({ recs }) => {
    return (
        <div className="list">
            <p>РЕКОМЕНДАЦИИ </p>
            <ul>
                {
                    recs.map(rec => (
                        <li key={rec.barcode}>
                            <ThingCardContainer item={rec} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Recommendations;