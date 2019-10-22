import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import History from './History';

const HistoryContainer = ({ historyThings }) => (
    <History
        historyThings={historyThings}
    />
);

HistoryContainer.propTypes = {
    historyThings: PropTypes.arrayOf(PropTypes.string),
};

HistoryContainer.defaultProps = {
    historyThings: [
        {
            barcode: "8052997615073",
            vendorcode: "I9JC237CU.BIANCO",
            title: "Блуза женская",
            price: "16900",
        }
    ],
};

const mapStateToProps = state => ({
    historyThings: state.currentThing.history
});

export default connect(mapStateToProps, null)(HistoryContainer);