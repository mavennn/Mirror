import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import { addToBasket } from '../actions/items';

const Card = (props) => {
  const item = props.currentItem;
  if (Object.keys(item).length === 0) {
    return null;
  }
  const vendorCode = item.vendor_code;
  return (
    <>
      <h2>{item.title}</h2>
      <select id="sizes">
        {item.sizes.map(i => (
          <option key={i}>{i}</option>
        ))}
      </select>
      <br />
      <h2 className="price">
          Цена:
        {item.price}
      </h2>
      <button
        type="submit"
        onClick={() => {
          props.basketItems.indexOf(item) === -1
            ? props.addToBasket(item)
            : alert('Товар уже есть в корзине');
        }}
      >
          Добавить в корзину
      </button>
      <Carousel id="carousel" dynamicHeight showThumbs={false} width="300px" axis="horizontal">
        <img src={require(`../assets/img/${vendorCode}-1.png`)} alt={vendorCode} />
        <img src={require(`../assets/img/${vendorCode}-2.png`)} alt={vendorCode} />
        <img src={require(`../assets/img/${vendorCode}-3.png`)} alt={vendorCode} />
      </Carousel>
    </>
  );
};

const mapStateToProps = state => ({
  currentItem: state.items.currentItem,
  basketItems: state.items.basketItems,
});

const mapDispatchToProps = {
  addToBasket,
};

Card.defaultProps = {
  currentItem: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
  basketItems: PropTypes.array,
  addToBasket: PropTypes.func,
};

Card.propTypes = {
  currentItem: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
  basketItems: PropTypes.array,
  addToBasket: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
