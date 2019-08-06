import React from 'react';
import { connect } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import { addToBasket } from '../actions/items';

class Card extends React.Component {	


    componentDidMount(){

    }

     render() {
        const item = this.props.currentItem;
        if(Object.keys(item).length != 0){
            const vendor_code = item.vendor_code;
                return(
                    <>
                    <h2>{item.title}</h2>
                    <select id="sizes">
                        {item.sizes.map(i => {
                            return(
                                <option key={i}>{i}</option>
                            )
                        })}
                    </select>
                    <button onClick={() => {
                        this.props.basketItems.indexOf(item) === -1 
                        ? this.props.addToBasket(item)
                        : alert("Товар уже есть в корзине");
                        }}>Добавить в корзину
                        </button>
                    <Carousel id="carousel" dynamicHeight={true} showThumbs={false} width="300px" axis="horizontal">
                            <img src={require(`../assets/img/${vendor_code}-1.png`)} />
                            <img src={require(`../assets/img/${vendor_code}-2.png`)} />
                            <img src={require(`../assets/img/${vendor_code}-3.png`)} />
                    </Carousel>
                    </>
                );
        } else {
            return null;
        }
        
    }
}

const mapStateToProps = state => {
    return {
        currentItem: state.items.currentItem,
        basketItems: state.items.basketItems,
    }
}

const mapDispatchToProps = {
    addToBasket,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
