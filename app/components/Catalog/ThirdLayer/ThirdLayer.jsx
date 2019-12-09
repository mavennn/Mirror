import React from 'react';
import PropTypes from 'prop-types';

import ThingCard from '../../CatalogCards/ThingCard';

const ThirdLayer = ({ things }) => (
  <div className="things-layer">
    <div className="filter">Filter</div>
    <ul className="things-list">
      {things.map((thing) => (
        <li key={thing.ware}>
          <ThingCard thing={thing} />
        </li>
      ))}
    </ul>
  </div>
);

ThirdLayer.propTypes = {
  things: PropTypes.arrayOf(PropTypes.object),
};

ThirdLayer.defaultProps = {
  things: [{}, {}],
};

export default ThirdLayer;
