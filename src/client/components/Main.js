import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import io from 'socket.io-client';

import BarCode from './BarCodeInput';
import Header from './Header';
import History from './History';
import Card from './Card';

class Main extends React.Component{

    callConsultant() {
        // const socket = io('http://localhost:8080');

        // socket.emit('call_consultant', localStorage.getItem('room'))
    }

    render(){
        return(
            <div id="main">
                <Header />
                <button onClick={this.callConsultant}>Вызвать консультанта</button>
                <section>
                    <Card />
                    {/* <Recommendation /> */}
                    <div id="recommendation">
                        <ul>
                        {
                            this.props.thingsInCapsule.map(item => {
                                {console.log(item.title)}
                                return(
                                <li key={item.id} style={{color: "#fff"}}>{item.title}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </section>
                <History />
                <BarCode />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        thingsInCapsule: state.items.itemsInCapsule,
    }
}

export default connect(mapStateToProps)(Main);