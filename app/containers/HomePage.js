// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';

type Props = {};

class HomePage extends Component<Props> {
  props: Props;
  render() {
    return <Home currentThing={this.props.currentThing}/>;
  }
}

const mapStateToProps = state => {
  return({
    currentThing: state.items.currentItem,
  })
}

export default connect(mapStateToProps, null)(HomePage);

