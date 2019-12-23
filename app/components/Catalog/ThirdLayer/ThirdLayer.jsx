import React, { useState, useEffect } from 'react';
import { history } from '../../../store/configureStore';
import routes from '../../../constants/routes';
import styles from './ThingsLayer.css';
import Swal from 'sweetalert2';

//  0 0 0
//  0 0 1
//  0 1 0
//  0 1 1
//  1 0 0
//  1 0 1
//  1 1 1

const applyFilter = (things, b, s, sp) => {
  let result = [];

  if ( b.length === 0 && s.length === 0 && sp.length === 0) { // 0 0 0 
    result = things;
  } else if (b.length === 0 && s.length === 0 && sp.length !== 0) {// 0 0 1
    result = things.filter(item => sp.includes(item.sport))
  } else if (b.length === 0 && s.length !== 0 && sp.length === 0) { // 0 1 0
    result = things.filter(item => s.includes(item.season))
  } else if (b.length === 0 && s.length !== 0 && sp.length !== 0) { // 0 1 1
    result = things.filter(item => {
      return s.includes(item.season) && sp.includes(item.sport)
    })
  } else if (b.length !== 0 && s.length === 0 && sp.length === 0) { // 1 0 0
    result = things.filter(item => b.includes(item.brand))
  } else if (b.length !== 0 && s.length === 0 && sp.length !== 0) { // 1 0 1
    result = things.filter(item => {
      return b.includes(item.brand) && sp.includes(item.sport)
    })
  } else if (b.length !== 0 && s.length !== 0 && sp.length !== 0) { // 1 1 1
    result = things.filter(item => {
      return b.includes(item.brand) && s.includes(item.season) && sp.includes(item.sport)
    })
  } else if (b.length !== 0 && s.length !== 0 && sp.length === 0) {// 1 1 0
    result = things.filter(item => {
      return b.includes(item.brand) && s.includes(item.season)
    })
  }

  return result;
};

const addClickToFilterOptions = () => {
  let options = [...document.querySelectorAll("#option")];
  options.map((option) => {
    option.addEventListener('click', () => {

      // находим список внутри опции
      let list = option.querySelector('#dropdown');
      list.style.display === 'block' ? list.style.display = 'none' : list.style.display = 'block';
    });
  });
}

const ThirdLayer = ({ 
  things,
  fetchThingInfo,
  selectedBrands,
  selectedSeasons,
  selectedSports,
  allBrands,
  allSeasons,
  allSports,
  toggleBrand,
  toggleSeason,
  toggleSport,
}) => {
  
  useEffect(() => {
    addClickToFilterOptions();
  });
  
  const [elementThings, setThings] = useState(things);

  return (
    <div className={styles.third_layer}>

      {/* фильтр товаров */}
      <div className={styles.filter}>
        <div className={styles.filter__title}>
          <p>Фильтры</p>
        </div>

        {/* Бренды */}
        <div id="option" className={styles.filter__option}>
          <span className={styles.filter__option_title}>Бренды</span>
          <ul id="selected-brands" className={styles.filter__selectedList}> 
            {
              selectedBrands.map(brand => (
                <li 
                  key={brand}
                  className={styles.filter__selectedList_item}
                >
                  {brand}
                </li>
              ))
            }
          </ul>
          <ul id="dropdown" className={styles.filter__option_list}>
            {allBrands.map((brand) => (
              <li 
                key={brand} 
                onClick={() => {
                  toggleBrand(brand)
                  addClickToFilterOptions();
                }}
                style={{ backgroundColor: selectedBrands.includes(brand) ? 'yellowgreen' : 'black'}}
                className={styles.filter__option_list_item}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>

        {/* Сезоны */}
        <div id="option" className={styles.filter__option}>
        <span className={styles.filter__option_title}>Сезон</span>
          <ul id="selected-brands" className={styles.filter__selectedList}> 
            {
              selectedSeasons.map(season => (
                <li 
                  key={season}
                  className={styles.filter__selectedList_item}
                >
                  {season}
                </li>
              ))
            }
          </ul>
          {/* список сезонов */}
          <ul id="dropdown" className={styles.filter__option_list}>
            {allSeasons.map((season) => (
              <li 
                  key={season} 
                  onClick={() => {
                    toggleSeason(season);
                    addClickToFilterOptions();
                  }}
                  style={{ backgroundColor: selectedSeasons.includes(season) ? 'yellowgreen' : 'black'}}
                  className={styles.filter__option_list_item}
              >
                  {season}
              </li>
            ))}
          </ul>
        </div>

        {/* Виды спорта */}
        <div id="option" className={styles.filter__option}>
        <span className={styles.filter__option_title}>Вид спорта</span>
          <ul id="selected-brands" className={styles.filter__selectedList}> 
            {
              selectedSports.map(sport => (
                <li 
                  key={sport}
                  className={styles.filter__selectedList_item}
                >
                  {sport}
                </li>
              ))
            }
          </ul>
          {/* список видов спорта */}
          <ul id="dropdown" className={styles.filter__option_list}>
            {allSports.map((sport) => (
              <li 
                  key={sport} 
                  onClick={() => {
                    toggleSport(sport);
                    addClickToFilterOptions();
                  }}
                  style={{ backgroundColor: selectedSports.includes(sport) ? 'yellowgreen' : 'black'}}
                  className={styles.filter__option_list_item}
              >
                  {sport}
              </li>
            ))}
          </ul>
        </div>

        {/* Применить фильтры */}
        <button 
          className={styles.filter__button}
          onClick={() => {
            setThings(applyFilter(things, selectedBrands, selectedSeasons, selectedSports))
            addClickToFilterOptions();
          }}
        >
          Применить фильтры
        </button>
      </div>

      {/* Список вещей */}
      <ul className={styles.things_list}>
        {elementThings.map((thing) => (
          <li
            key={thing.id}
            className={styles.things_list__item}
            onClick={() => {
              fetchThingInfo(thing.barcode, 'barcode');
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
          { thing.season === "" ? null : <span>Сезон: {thing.season}</span>}
          <br />
          { thing.sport === "" ? null : <span>Вид спорта: {thing.sport}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThirdLayer;
