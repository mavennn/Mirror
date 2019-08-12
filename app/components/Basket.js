import React from 'react';
import { connect } from 'react-redux';


import Header from "./Header";

const Basket = ({ basket}) => {
        return (
            <div className="basket">
                <Header />
                <ul>
                    {
                        basket.map(item => (
                           <li key={item.vendor_code + item.sizes[0]} className="flex ml6 mr6 mb4">
                               <img src={require(`../assets/img/${item.vendor_code}-1.png`)} />
                               <div className="pl4">
                                   <h2>{item.title}</h2>
                                   <h3 className="">{item.price}</h3>
                                   <h3 className="">{item.sizes[0]}</h3>
                                   <div>В наличии: </div>
                               </div>
                           </li>
                        ))
                    }
                </ul>
            </div>
        );
};

const mapStateToProps = state => ({
    basket: state.items.basketItems,
})
export default connect(mapStateToProps, null)(Basket);
