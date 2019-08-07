import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import axios from 'axios';

import { addToBasket, setCurrentItem, addToHistory } from '../actions/items';


const Card = ({
  currentItem, basketItems, addToBasket, setCurrentItem, historyItems, addToHistory
}) => {
  const item = currentItem;
  if (Object.keys(item).length === 0) {
    return null;
  }
  const vendorCode = item.vendor_code;

  function getItemFromDb(code) {
    axios.get(`http://localhost:8080/thing/${code}`)
      .then(response => setCurrentItem(response.data));
  }

  return (
    <>
      <div id="card" className="w-50 pa2">
        <h2 className="tc mr6">{item.title}</h2>
        <div className="flex pa3">
          <Carousel id="carousel" dynamicHeigth showThumbs={false} width="400px" axis="horizontal">
            <img src={require(`../assets/img/${vendorCode}-1.png`)} alt={vendorCode} />
            <img src={require(`../assets/img/${vendorCode}-2.png`)} alt={vendorCode} />
            <img src={require(`../assets/img/${vendorCode}-3.png`)} alt={vendorCode} />
          </Carousel>
          <div className="info pa3">
            <h2 className="price">
            Цена:
              {item.price}
            </h2>
            <select id="sizes" className="">
              {item.sizes.map(i => (
                <option key={i.id}>{i.title}</option>
              ))}
            </select>
            <br />
            <button
              type="submit"
              onClick={() => {
                basketItems.indexOf(item) === -1
                  ? addToBasket(item)
                  : alert('Товар уже есть в корзине');
              }}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div id="recommendation" className="w-50 pa5">
        <ul className="flex flex-wrap">
          {
        item.capsule.map(i => (
          <li key={i.id} style={{ color: '#fff' }} className="pa2">
            <img
              src={require(`../assets/img/${i.vendor_code}-1.png`)}
              alt="adf"
              className="ml3"
              onClick={() => {
                axios.get(`http://localhost:8080/thing/${i.vendor_code}`)
                  .then((response) => {
                    setCurrentItem(response.data);
                    if (historyItems.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
                      addToHistory(response.data);
                    }
                  });
              }}
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

const mapDispatchToProps = {
  addToBasket,
  setCurrentItem,
  addToHistory
};

Card.defaultProps = {
  currentItem: PropTypes.object,
  title: PropTypes.any,
  price: PropTypes.any,
  basketItems: PropTypes.array,
  addToBasket: PropTypes.func,
  setCurrentItem: PropTypes.func,
};

Card.propTypes = {
  currentItem: PropTypes.objectOf,
  title: PropTypes.any,
  price: PropTypes.any,
  basketItems: PropTypes.arrayOf,
  addToBasket: PropTypes.func,
  setCurrentItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
