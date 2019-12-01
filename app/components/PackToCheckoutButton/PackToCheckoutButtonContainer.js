import React from 'react';
import { connect } from 'react-redux';

import PackToCheckoutButton from './PackToCheckoutButton';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';

const PackToCheckoutButtonContainer = ({ getConsultantThunkCreator }) => (
<<<<<<< HEAD
  <PackToCheckoutButton getConsultant={getConsultantThunkCreator} />
);

const mapDispatchToProps = {
  getConsultantThunkCreator
};

export default connect(null, mapDispatchToProps)(PackToCheckoutButtonContainer);
=======
    <PackToCheckoutButton getConsultant={getConsultantThunkCreator} />
);

const mapDispatchToProps = {
    getConsultantThunkCreator
};

export default connect(null, mapDispatchToProps)(PackToCheckoutButtonContainer);
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
