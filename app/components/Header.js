import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import '../tachyons.min.css';

import { setToDefault } from '../actions/items';

class Header extends Component<{}> {
    render() {
        return (
            <div className="header flex justify-around fw3">
                <Link className="ma3" to={routes.CATALOG}>Каталог</Link>
                <Link className="ma3" to={routes.EXPECTATION} onClick={() => this.props.setToDefault()}>Завершить обслуживание</Link>
                <Link className="ma3" to={routes.HOME}>Главная</Link>
                <Link className="ma3" to={routes.BASKET}>Корзина</Link>
            </div>
        )
    }
}

const mapDispatchToProps = {
    setToDefault,
}

export default connect(null, mapDispatchToProps)(Header);
