import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import axios from 'axios';
import $ from 'jquery';
import {addToBasket, addToHistory, setCurrentItem} from '../actions/items';
import {getConsultant} from "../api";

require('dotenv').config();

function Home(props: { thing: string, history: any, setItem: any, addBasket: any, basket: any, socket: any }) {
    if (Object.keys(props.thing).length !== 0) {
        return (
            <div>
                <Header/>
                <div className="flex justify-between">
                    <h1 className="ma3">{props.thing.title}</h1>
                    <button onClick={() => {
                        props.socket.emit('getConsultant', process.env.ROOM)
                    }}>Вызвать консультанта
                    </button>
                </div>

                <div className="content flex">
                    <div className="card w-30 ma3">
                        <img
                            src={require(`../assets/img/${props.thing.vendor_code}-1.png`)}
                        />
                    </div>
                    <div className="info w-20">
                        <h2>{props.thing.price} руб.</h2>
                        <p><select multiple id="sizes">
                            {
                                props.thing.sizes.map(sz => (
                                    <option key={sz.id}>{sz.title}</option>
                                ))
                            }
                        </select></p>
                        <button onClick={() => {
                            $('#sizes').val()[0] === undefined
                                ? alert('choose size please')
                                : props.addBasket(props.thing, props.basket, $('#sizes').val()[0])
                        }}>Добавить в корзину
                        </button>
                        <button className="ma3">Принести сейчас</button>
                    </div>
                    <div className="capsule w-50">
                        <ul className="flex flex-wrap ma3">
                            {
                                props.thing.capsule.map(item => (
                                    <li key={item.vendor_code} className="ma1">
                                        <img
                                            src={require(`../assets/img/${item.vendor_code}-1.png`)}
                                            onClick={() => props.setItem(item.vendor_code, props.history)}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="history">
                    <ul className="flex">
                        {
                            props.history.map(item => (
                                <li key={item.price}>
                                    <img
                                        src={require(`../assets/img/${item.vendor_code}-1.png`)}
                                        onClick={() => props.setItem(item.vendor_code, props.history)}
                                    />
                                    <p>{item.title}</p>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
    return (null);
}

const mapStateToProps = state => ({
    thing: state.items.currentItem,
    history: state.items.historyItems,
    basket: state.items.basketItems,
    socket: state.sockets.socket,
});

const mapDispatchToProps = dispatch => ({
    setItem: (vendor, history) => {
        axios.get(`http://localhost:3123/thing/${vendor}`)
            .then(response => {
                dispatch(setCurrentItem(response.data));
                if(history.findIndex(x => x.vendor_code === response.data.vendor_code) === -1){
                    dispatch(addToHistory(response.data));
                }
            })
    },
    addBasket: (item, basket, size) => {
        const index = basket.findIndex(x => x.vendor_code === item.vendor_code && x.sizes[0] === size);
        // console.log(index);
        if (index === -1) {
            dispatch(addToBasket({ ...item, sizes: [size] }));
        } else if ( basket[index].sizes[0] !== size) {
            // console.log('товар уже есть, но это другой размер')
            dispatch(addToBasket({ ...item, sizes: [size] }));
        } else {
            alert('товар уже есть в корзине');
        }
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
