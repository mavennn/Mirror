import React from 'react';
import { connect } from 'react-redux';

import BasketThingsList from './BasketThingsList';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

const BasketThingsListContainer = ({ basketThings }) => (
    <BasketThingsList
        basketThings={basketThings}
    />
);

const mapStateToProps = (state) => ({
    basketThings: state.basketThings.basketThings,
});

export default connect(mapStateToProps, null)(BasketThingsListContainer);