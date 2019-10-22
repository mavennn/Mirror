import React from 'react';
import { connect } from "react-redux";

import BasketPage from './BasketPage';

const BasketPageContainer = ({ basketThings }) => {
    return <BasketPage basketThings={basketThings}/>;
};

const mapStateToProps = (state) => ({
    basketThings: state.basketThings.basketThings,
});

export default connect(mapStateToProps, null)(BasketPageContainer);