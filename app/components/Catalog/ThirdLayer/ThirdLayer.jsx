import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThingsLayer.css';
import { history } from '../../../store/configureStore';
import routes from '../../../constants/routes';

const ThirdLayer = ({ things, fetchThingInfo }) => (
  <div className="things-layer">
    {/*<div className="filter">Filter</div>*/}
    <ul className={styles.things_list}>
      {things.map((thing) => (
        <li
          key={thing.ware}
          className={styles.things_list__item}
          onClick={() => {
            fetchThingInfo(thing.barcode);
            history.push(routes.HOME);
          }}
        >
          <div className={styles.things_list__item_image_container}>
            <img src={thing.image} className={styles.things_list__item_image} />
          </div>
          <div className={styles.things_list__item_title}>
            <p>{thing.name}</p>
          </div>
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
