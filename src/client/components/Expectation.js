import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BarCode from './BarCodeInput';
import { setToDefault } from '../actions/items';

const Expectation = props => (
  <div id="welcome_page">
    <Link
      to="/main"
      onClick={() => {
        props.setToDefault();
      }}
    >
НАЧАТЬ ЗАНОВО
    </Link>
    <Link to="/main">ПРОДОЛЖИТЬ</Link>
    <BarCode />
  </div>
);

Expectation.defaultProps = {
  setToDefault: PropTypes.func,
};

Expectation.propTypes = {
  setToDefault: PropTypes.func,
};

const mapDispatchToProps = {
  setToDefault
};

export default connect(null, mapDispatchToProps)(Expectation);
