import React from 'react';
import { connect } from 'react-redux';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';

import BringThingButton from './BringThingButton';

const BringThingButtonContainer = ({ getConsultantThunkCreator }) => (
<<<<<<< HEAD
  <BringThingButton getConsultant={getConsultantThunkCreator} />
);

const mapDispatchToProps = {
  getConsultantThunkCreator
};

export default connect(null, mapDispatchToProps)(BringThingButtonContainer);
=======
    <BringThingButton getConsultant={getConsultantThunkCreator}/>
);

const mapDispatchToProps = {
    getConsultantThunkCreator,
};

export default connect(null, mapDispatchToProps)(BringThingButtonContainer);
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
