import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import BarCode from './BarCodeInput';
import { setCurrenItem } from '../actions/items';

class Basket extends React.Component{

    render(){
        const  basketItems = this.props.basketItems;
        if(basketItems.length != 0) {
            return(
                <div id="basket">
                    <Header />
                    <ul>
                    {
                        basketItems.map(item => {
                            return(
                                <li key={item.bar_code}>
                                    <img 
                                        src={require(`../assets/img/${item.vendor_code}-1.png`)} 
                                    />
                                    <p>{item.title}</p>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <BarCode />
                </div>
            );
        } else {
            return(
                <div id="basket">
                    <Header />
                    <BarCode />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        basketItems: state.items.basketItems,
    }
}

const mapDispatchToProps = {
    setCurrenItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);