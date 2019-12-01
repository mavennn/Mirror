import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AvailableColors from './AvailableColors';
import { changeColor } from '../../store/actions/сurrentThingActions';

const getColorCode = color => {
  switch (color) {
    case 'Белый':
      return 'white';
    case 'Черный':
      return 'black';
    case 'Оранжевый':
      return 'orange';
    case 'Синий':
      return 'blue';
    case 'Зеленый':
      return 'green';
    case 'Розовый':
      return 'pink';
    case 'Серый':
      return 'gray';
    case 'Голубой':
      return 'light-blue';
    case 'Бежевый':
      return 'beige';
    case 'Красный':
      return 'red';
    case 'Бордовый':
      return 'burgundy';
    case 'Коричневый':
      return 'brown';
    default:
      return null;
  }
};

const AvailableColorsContainer = ({ colors, changeColor }) => (
  <AvailableColors colors={colors} changeColor={changeColor} />
);

AvailableColorsContainer.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  colors: state.currentThing.availableColors
});

export default connect(mapStateToProps, { changeColor })(
  AvailableColorsContainer
);
