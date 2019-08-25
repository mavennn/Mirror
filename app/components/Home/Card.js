import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Card = ({ thing, addToBasketThunkCreator, getConsultantThunkCreator }) => {
  return (
      <Carousel>
        {
          thing.pictures.map(pic => (
              <div>
                <img src={pic} />
              </div>
          ))
        }
      </Carousel>
  )
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

export default Card;
