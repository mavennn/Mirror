import React from 'react';
import { connect } from 'react-redux';
import { addToBasket } from '../actions/items';
import $ from 'jquery';

const Card = ({ thing, basket, addBasket }) => (
  <>
    <div className="card w-30 ma3">
      <img
        src={require(`../assets/img/${thing.vendor_code}-1.png`)}
      />
    </div>
    <div className="info w-20">
      <h2>
        {thing.price}
        {' '}
        руб.
      </h2>
      <p>
        <select multiple id="sizes">
          {
            thing.sizes.map(sz => (
              <option key={sz.id}>{sz.title}</option>
            ))
          }
        </select>
      </p>
      <button onClick={() => {
        $('#sizes').val()[0] === undefined
          ? alert('choose size please')
          : addBasket(thing, basket, $('#sizes').val()[0]);
      }}
      >
        Добавить в корзину
      </button>
      <button className="ma3">Принести сейчас</button>
    </div>
  </>
);

const mapStateToProps = state => ({
  thing: state.items.currentItem,
  basket: state.items.basketItems,
});

const mapDispatchToProps = dispatch => ({
  addBasket: (item, basket, size) => {
    const index = basket.findIndex(x => x.vendor_code === item.vendor_code && x.sizes[0] === size);
    // console.log(index);
    if (index === -1) {
      dispatch(addToBasket({ ...item, sizes: [size] }));
    } else if (basket[index].sizes[0] !== size) {
      // console.log('товар уже есть, но это другой размер')
      dispatch(addToBasket({ ...item, sizes: [size] }));
    } else {
      alert('товар уже есть в корзине');
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
