import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import sockets from '../../constants/sockets';
import { addToBasketThunkCreator, getConsultantThunkCreator } from '../../reducers/items';

const Card = ({
  thing, addToBasketThunkCreator, getConsultantThunkCreator
}) => (
  <>
    <div className="card w-30 ma3">
      <img
        src={require(`../../assets/img/${thing.vendor_code}-1.png`)}
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
      <button onClick={() => { addToBasketThunkCreator(thing, $('#sizes').val()[0]); }}>
        Добавить в корзину
      </button>
      <button
        className="ma3"
        onClick={() => {
          if ($('#sizes').val()[0]) {
            getConsultantThunkCreator(sockets.BRING_THING, thing.title, thing.vendor_code, $('#sizes').val()[0], thing.price);
          } else {
            alert('Выбери размер');
          }
        }}
      >
        Принести сейчас
      </button>
    </div>
  </>
);

const mapStateToProps = state => ({
  thing: state.items.currentItem,
});

const mapDispatchToProps = {
  addToBasketThunkCreator,
  getConsultantThunkCreator,
}

Card.defaultProps = {
  thing: PropTypes.object,
  addToBasketThunkCreator: PropTypes.func,
  getConsultantThunkCreator: PropTypes.func,
};

Card.propTypes = {
  thing: PropTypes.object,
  addToBasketThunkCreator: PropTypes.func,
  getConsultantThunkCreator: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
