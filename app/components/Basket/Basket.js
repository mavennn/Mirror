import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import sockets from '../../constants/sockets';
import { clearBasket, getConsultantThunkCreator } from '../../reducers/things';

import Header from '../Header';

{ /* <div className="basket"> */ }
{ /*    <ul> */ }
{ /*        { */ }
{ /*            basketItems.map(item => ( */ }
{ /*                <li key={item.vendor_code + item.sizes[0]} className="flex ml6 mr6 mb4"> */ }
{ /*                    <img src={require(`../../assets/img/${item.vendor_code}-1.png`)} /> */ }
{ /*                    <div className="pl4"> */ }
{ /*                        <h2>{item.title}</h2> */ }
{ /*                        <h3 className="">{item.price}</h3> */ }
{ /*                        <h3 className="">{item.sizes[0]}</h3> */ }
{ /*                        <div>В наличии: </div> */ }
{ /*                    </div> */ }
{ /*                </li> */ }
{ /*            )) */ }
{ /*        } */ }
{ /*    </ul> */ }
{ /*    <button onClick={() => getConsultantThunkCreator(sockets.TO_CHECKOUT, basketItems)}> */ }
{ /*        Принести товары */ }
{ /*    </button> */ }
{ /*    <button onClick={() => clearBasket()}>Очистить корзину</button> */ }
{ /*    <p> */ }
{ /*        {totalSum} */ }
{ /*    </p> */ }
{ /* </div> */ }


const Basket = ({ basketItems, clearBasket, getConsultantThunkCreator }) =>
// let totalSum = basketItems.reduce((accumulator, item) => accumulator + item.price, 0);

  (
    <>
      <Header />
      <h1>BASKET</h1>
    </>
  );
const mapStateToProps = state => ({
  basketItems: state.items.basketItems,
});

Basket.propTypes = {
  basketItems: PropTypes.array,
};

export default connect(mapStateToProps, { clearBasket, getConsultantThunkCreator })(Basket);
