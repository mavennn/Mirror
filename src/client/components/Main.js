import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BarCode from './BarCodeInput';
import Header from './Header';
import History from './History';
import Card from './Card';

const Main = ({ thingsInCapsule }) => (
  <div id="main">
    <Header />
    <section>
      <Card />
      <div id="recommendation">
        <ul>
          {
            thingsInCapsule.map(item => (
              <li key={item.id} style={{ color: '#fff' }}>
                <img src={require(`../assets/img/${item.vendor_code}-1.png`)} alt="adf" />
                <p>{item.title}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
    <History />
    <BarCode />
  </div>
);

const mapStateToProps = state => ({
  thingsInCapsule: state.items.itemsInCapsule,
});

Main.defaultProps = {
  thingsInCapsule: PropTypes.func,
};

Main.propTypes = {
  thingsInCapsule: PropTypes.func,
};

export default connect(mapStateToProps)(Main);
