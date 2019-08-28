import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

import { setToDefault } from '../actions/things';
import Emoji from "../components/Emoji";

const Expectation = props => (
  <div className="expectation">
    <div className="hello">
      <h1>Привет!</h1>
        <p> Я - умное зеркало, я помогу тебе с выбором одежды <Emoji symbol="✌️"/><Emoji symbol="👖"/><Emoji symbol="👗"/></p>
    </div>
    <div className="welcome_page flex justify-center">
      <Link className="ma5" to={routes.HOME} onClick={() => props.setToDefault()}>НАЧАТЬ ЗАНОВО</Link>
      <Link className="ma5" to="" onClick={() => props.history.goBack()}>ПРОДОЛЖИТЬ</Link>
    </div>
  </div>
);

const mapDispatchToProps = {
  setToDefault,
};

export default connect(null, mapDispatchToProps)(Expectation);
