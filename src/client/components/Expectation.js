import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

import BarCode from './BarCodeInput';
import { setToDefault } from '../actions/items'

class Expectation extends React.Component{
    componentDidMount() {
        // const socket = socketIOClient('http://localhost:8080/');
    }

    render(){ 
        return(
        <div id="welcome_page">
            <Link to="/main" onClick={() => {this.props.setToDefault()}}>НАЧАТЬ ЗАНОВО</Link>
            <Link to="/main">ПРОДОЛЖИТЬ</Link>

            {/* http://qaru.site/questions/125172/automatic-redirect-after-login-with-react-router */}
            <BarCode />
        </div>
        );
    }
}

const mapDispatchToProps = {
    setToDefault
}

export default connect(null, mapDispatchToProps)(Expectation);