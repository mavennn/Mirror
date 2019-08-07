import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { setCurrentItem } from '../actions/items';

import BarCode from './BarCodeInput';
import Header from './Header';
import History from './History';
import Card from './Card';

async function setItem(vendorCode) {
  const thing = await axios.get(`http://localhost:8080/thing/${vendorCode}`);
  return thing.data;
}

const Main = ({ thingsInCapsule, setCurrentItem }) => (
  <div id="main">
    <Header />
    <section className="flex">
      <Card />

    </section>
    <History />
    <BarCode />
  </div>
);

const mapStateToProps = state => ({
  thingsInCapsule: state.items.itemsInCapsule,
});

const mapDispatchToProps = {
  setCurrentItem,
}

Main.defaultProps = {
  thingsInCapsule: PropTypes.arrayOf,
  setCurrentItem: PropTypes.func,
};

Main.propTypes = {
  thingsInCapsule: PropTypes.arrayOf,
  setCurrentItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
