import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const HeaderContainer = ({ location }) => (
    <Header location={location}/>
);


const mapStateToProps = (state) => ({
    location: state.router.location.pathname,
});


export default connect(mapStateToProps, null)(HeaderContainer);