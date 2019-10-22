import React from 'react';
import { connect } from 'react-redux';

import BringThingButton from './BringThingButton';

const BringThingButtonContainer = () => (
    <BringThingButton />
);

export default connect()(BringThingButtonContainer);