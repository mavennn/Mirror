import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

import { setToDefault } from '../actions/things';

const Expectation = props => (
  <div className="expectation">
    <div>
      <h1>Привет!</h1>
      <p>Я - умное зеркало, я помогу тебе с выбором одежды</p>
    </div>
    <div className="welcome_page flex justify-center mt7">
      <Link className="ma5" to={routes.HOME} onClick={() => props.setToDefault()}> НАЧАТЬ ЗАНОВО </Link>
      <button id="go-mirror-btn" onClick={() => props.history.goBack()}>Продолжить</button>
    </div>
  </div>
);

const mapDispatchToProps = {
  setToDefault,
};

export default connect(null, mapDispatchToProps)(Expectation);
