import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BarCode from './BarCodeInput';
import Header from './Header';
import History from './History';
import Card from './Card';

const Main = () => (
  <div id="main">
    <Header />
    <section className="flex">
      <Card />

    </section>
    <History />
    <BarCode />
  </div>
);

export default connect(null, null)(Main);
