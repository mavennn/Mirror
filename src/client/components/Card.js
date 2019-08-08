import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';

import { addToBasket, setCurrentItem, addToHistory } from '../actions/items';


const Card = ({ currentItem, addBasket, addCurrentItem, basketItems, historyItems }) => {
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
              onClick={() => addBasket(currentItem, basketItems, $('#sizes option:selected').text())}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div id="recommendation" className="w-50 pa5">
        <ul className="flex flex-wrap">
          {
              currentItem.capsule.map(i => (
                <li key={i.vendor_code} className="pa2">
                  <img
                    src={require(`../assets/img/${i.vendor_code}-1.png`)}
                    alt="adf"
                    className="ml3"
                    onClick={() => addCurrentItem(i.vendor_code, historyItems)}
                  />
                </li>
              ))
          }
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  currentItem: state.items.currentItem,
  basketItems: state.items.basketItems,
  historyItems: state.items.historyItems,
});

const mapDispatchToProps = dispatch => ({
  addCurrentItem: (vendorCode, history) => {
    axios.get(`http://localhost:8080/thing/${vendorCode}`)
      .then((response) => {
        dispatch(setCurrentItem(response.data));
        if (history.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
          dispatch(addToHistory(response.data));
        }
      });
  },
  addBasket: (item, basket, size) => {
    const index = basket.findIndex(x => x.vendor_code === item.vendor_code);
    if (index === -1) {
      dispatch(addToBasket({ ...item, sizes: [size] }));
    } else if (basket[index].sizes.indexOf(size) === -1) {
      dispatch(addToBasket({ ...item, sizes: [size] }));
    }
  }
});


Card.defaultProps = {
  currentItem: PropTypes.shape({
    title: 'ПОЛО МУЖСКОЕ',
    price: 699,
    id_capsule: 3,
    color: 'empty',
    image_url: '',
    images_count: 3,
    vendor_code: 'EPOM035HXS',
    id: 3,
    capsule: [],
  }),
  basketItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: 'ФУТБОЛКА ЖЕНСКАЯ',
      price: 1299,
      id_capsule: '2',
      color: 'green',
      image_url: '',
      images_count: 3,
      vendor_code: 'ETSW1499XS',
      id: '8',
    })
  ),
  addBasket: PropTypes.func,
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
    capsule: PropTypes.array,
  }),
  basketItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id_capsule: PropTypes.string,
      color: PropTypes.string,
      image_url: PropTypes.string,
      images_count: PropTypes.number,
      vendor_code: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  addBasket: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
