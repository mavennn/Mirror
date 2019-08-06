import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { setToDefault } from '../actions/items'

class Header extends React.Component{
    render(){
        return(
            <header>
                <Link to='/main/basket'>Корзина</Link>
                <Link to='/main/catalog'>Каталог</Link>
                <Link to='/main/'>Главная</Link>
                <Link to="/" onClick={() => {this.props.setToDefault()}}>Завершить обслуживание</Link>
            </header>
        );
    }
}

const mapDispatchToProps = {
    setToDefault
}

export default connect(null, mapDispatchToProps)(Header);