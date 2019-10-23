import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import '../../tachyons.min.css';

// icons
import * as alarm from '../../assets/icons/alarm.svg';
import * as hanger from '../../assets/icons/hanger.svg';
import * as shoppingCart from '../../assets/icons/shopping-cart.svg';
import * as eye from '../../assets/icons/eye.svg';
import * as error from '../../assets/icons/error.svg';
import * as up_arrow from '../../assets/icons/up_arrow.svg';

// call consultant function
import { getConsultantThunkCreator, cancelConsultantThunkCreator } from '../../store/reducers/currentThingReducer';
import sockets from '../../constants/sockets';

const Header = ({ 
  // getConsultantThunkCreator,
  // cancelConsultantThunkCreator,
  // isConsultantCalled
    location
}) => (
  <header>
    <div className="header-icons">
      {/*{*/}
      {/*  !isConsultantCalled*/}
      {/*    ?*/}
      {/*    <a className="header-block flex" onClick={() => getConsultantThunkCreator(sockets.CALL_CONSULTANT)}>*/}
      {/*      <img src={alarm} alt="Вызывать консультанта" />*/}
      {/*      <h3 className="pa2">Вызвать консультанта </h3>*/}
      {/*    </a>*/}
      {/*    : */}
      {/*    <a className="header-block flex" onClick={() => cancelConsultantThunkCreator()}>*/}
      {/*      <img src={error} alt="Отменить вызов" />*/}
      {/*      <h3 className="pa2">Отменить вызов</h3>*/}
      {/*    </a>*/}
      {/*}*/}
      <a className="header-block flex" onClick={() => console.log('getConsultant')}>
        <img src={alarm} alt="Вызывать консультанта" />
        <h3 className="pa2">Вызвать консультанта </h3>
      </a>
      {
        location === '/catalog'
            ? <Link to="" className="header-block flex">
              <img src={up_arrow} alt="Назад" onClick={() => history.goBack()} />
              <h3 className="pa2">Вернуться</h3>
            </Link>
            : <Link to={routes.CATALOG} className="header-block flex">
              <img src={hanger} alt="Каталог" />
              <h3 className="pa2">Каталог</h3>
            </Link>
      }
      {
        location === '/basket'
          ? <Link to="" className="header-block flex">
              <img src={up_arrow} alt="Назад" onClick={() => history.goBack()} />
              <h3 className="pa2">Вернуться</h3>
            </Link>
          : <Link to={routes.BASKET} className="header-block flex">
              <img src={shoppingCart} alt="Мои покупки" />
              <h3 className="pa2">Мои товары</h3>
            </Link>
      }

      <Link to={routes.MIRROR} className="header-block flex">
        <img src={eye} alt="Показать зеркало" />
        <h3 className="pa2">Показать зеркало</h3>
      </Link>
    </div>
  </header>
);

export default Header;