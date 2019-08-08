import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { setToDefault } from '../actions/items';

const Header = props => (
  <header>
    <Link to="/main/mirror" id="go-mirror-btn"></Link>
    <Link to="/main/basket">Корзина</Link>
    <Link to="/main/catalog">Каталог</Link>
    <Link to="/main/">Главная</Link>
    <Link
      to="/"
      onClick={() => {
        props.setToDefault();
      }}
    >
      Завершить обслуживание
    </Link>
  </header>
);

const mapDispatchToProps = {
  setToDefault
};

Header.defaultProps = {
  setToDefault: PropTypes.func,
};

Header.propTypes = {
  setToDefault: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Header);
