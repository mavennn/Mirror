import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import axios from 'axios';

import { addToBasket, setCurrentItem, addToHistory } from '../actions/items';
import basketItems from '../redusers/items';


const Card = ({
  currentItem, addBasket, addCurrentItem, basketItems
}) => {
  if (Object.keys(currentItem).length === 0) {
    return null;
  }
  const vendorCode = currentItem.vendor_code;

  return (
    <>
      <div id="card" className="w-50 pa2">
        <h2 className="tc mr6">{currentItem.title}</h2>
        <div className="flex pa3">
          <Carousel id="carousel" dynamicHeigth showThumbs={false} width="300px" axis="horizontal">
            <img src={require(`../assets/img/${vendorCode}-1.png`)} alt={vendorCode} />
            <img src={require(`../assets/img/${vendorCode}-2.png`)} alt={vendorCode} />
            <img src={require(`../assets/img/${vendorCode}-3.png`)} alt={vendorCode} />
          </Carousel>
          <div className="info pa3">
            <h2 className="price">
            Цена:
              {currentItem.price}
            </h2>
            <select id="sizes" className="">
              {currentItem.sizes.map(i => (
                <option key={i.id}>{i.title}</option>
              ))}
            </select>
            <br />
            <button
              type="submit"
              onClick={addBasket(currentItem, basketItems)}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      {/*  <div id="recommendation" className="w-50 pa5"> */}
      {/*    <ul className="flex flex-wrap"> */}
      {/*      { */}
      {/*        currentItem.capsule.map(i => ( */}
      {/*          <li key={i.id} style={{ color: '#fff' }} className="pa2"> */}
      {/*            <img */}
      {/*              src={require(`../assets/img/${i.vendor_code}-1.png`)} */}
      {/*              alt="adf" */}
      {/*              className="ml3" */}
      {/*              onClick={addCurrentItem(i.vendor_code)} */}
      {/*            /> */}
      {/*          </li> */}
      {/*        )) */}
      {/* } */}
      {/*    </ul> */}
      {/*  </div> */}
    </>
  );
};

const mapStateToProps = state => ({
  currentItem: state.items.currentItem,
  basketItems: state.items.basketItems,
  historyItems: state.items.historyItems,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrentItem: (vendorCode) => {
    axios.get(`http://localhost:8080/thing/${vendorCode}`)
      .then((response) => {
        dispatch(setCurrentItem(response.data));
      });
  },
  addBasket: (item, itemsInBasket) => {
    if (itemsInBasket.indexOf(item) === -1) {
      dispatch(addToBasket(item));
    }
  }
});

Card.defaultProps = {
  currentItem: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    id_capsule: PropTypes.string,
    color: PropTypes.string,
    image_url: PropTypes.string,
    images_count: PropTypes.number,
    vendor_code: PropTypes.string,
    id: PropTypes.string,
    sizes: PropTypes.arrayOf,
  }),
};

Card.propTypes = {
  currentItem: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    id_capsule: PropTypes.string,
    color: PropTypes.string,
    image_url: PropTypes.string,
    images_count: PropTypes.number,
    vendor_code: PropTypes.string,
    id: PropTypes.string,
    sizes: PropTypes.arrayOf,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
