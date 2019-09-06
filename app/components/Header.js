import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import '../tachyons.min.css';

// icons
import * as alarm from '../assets/icons/alarm.svg';
import * as hanger from '../assets/icons/hanger.svg';
import * as shoppingCart from '../assets/icons/shopping-cart.svg';
import * as eye from '../assets/icons/eye.svg';

// call consultant function
import { getConsultantThunkCreator } from '../reducers/things';
import sockets from '../constants/sockets';

const Header = ({ getConsultantThunkCreator }) => (
  <header>
    <div className="header-icons">
      <a className="header-block flex" onClick={() => getConsultantThunkCreator(sockets.CALL_CONSULTANT)}>
        <img src={alarm} alt="Вызывать консультанта" />
        <h3 className="pa2">Вызвать консультанта </h3>
      </a>
      <Link to={routes.CATALOG} className="header-block flex">
        <img src={hanger} alt="Каталог" />
        <h3 className="pa2">Каталог</h3>
      </Link>
      <Link to={routes.BASKET} className="header-block flex">
        <img src={shoppingCart} alt="Мои покупки" />
        <h3 className="pa2">Мои товары</h3>
      </Link>
      <Link to={routes.MIRROR} className="header-block flex">
        <img src={eye} alt="Показать зеркало" />
        <h3 className="pa2">Показать зеркало</h3>
      </Link>
    </div>
  </header>
);

export default connect(null, { getConsultantThunkCreator })(Header);
