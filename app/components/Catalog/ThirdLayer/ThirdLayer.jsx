import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThingsLayer.css';
import { history } from '../../../store/configureStore';
import routes from '../../../constants/routes';

const ThirdLayer = ({ things, fetchThingInfo, selectBrand }) => {
  let brands = [];

  // things.map((thing) => {
  //   if (thing.brand) {
  //     if (!brands.includes(thing.brand)) {
  //       brands.push(thing.brand);
  //     }
  //   }
  // });

  return (
    <div className={styles.third_layer}>
      <div className={styles.filter}>
        <div className={styles.filter__title}>
          <p>Фильтры</p>

          {/* Бренды */}
          <div className={styles.filter__brands}>
            <div className={styles.filter__brands_title}>
              <p>Бренды</p>
            </div>
            <ul className={styles.filter__brands_list}>
              {brands.map((brand) => (
                <li onClick={() => selectBrand(brand)}>{brand}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className={styles.filter__button}>Применить фильтры</button>
      </div>
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
              <img
                src={thing.image}
                className={styles.things_list__item_image}
              />
            </div>
            <div className={styles.things_list__item_title}>
              <p>{thing.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
ThirdLayer.propTypes = {
  things: PropTypes.arrayOf(PropTypes.object),
};

ThirdLayer.defaultProps = {
  things: [{}, {}],
};

export default ThirdLayer;
