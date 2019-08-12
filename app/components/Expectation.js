import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

import { setToDefault } from "../actions/items";

const Expectation = props => (
    <div className="welcome_page flex justify-center mt7">
        <Link className="ma5" to={routes.HOME} onClick={() => props.setToDefault()}> НАЧАТЬ ЗАНОВО </Link>
        <Link className="ma5" to={routes.HOME}> ПРОДОЛЖИТЬ </Link>
    </div>
);

const mapDispatchToProps = {
    setToDefault,
}

export default connect(null, mapDispatchToProps)(Expectation);
