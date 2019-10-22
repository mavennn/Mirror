import React from 'react';
import { connect } from 'react-redux';

import ExpectationPage from "./ExpectationPage";
import { setToDefault } from '../../store/actions/сurrentThingActions';

const ExpectationPageContainer = ({ setToDefault, history }) => (
    <ExpectationPage
        setToDefault={setToDefault}
        history={history}
    />
);

const mapDispatchToProps = {
    setToDefault
};

export default connect(null, mapDispatchToProps)(ExpectationPageContainer);