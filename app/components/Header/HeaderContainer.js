import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { getConsultantThunkCreator } from '../../store/actions/socketsActions';

<<<<<<< HEAD
const HeaderContainer = ({
  location,
  isConsultantCalled,
  getConsultantThunkCreator
}) => (
  <Header
    location={location}
    isConsultantCalled={isConsultantCalled}
    getConsultant={getConsultantThunkCreator}
  />
);

const mapStateToProps = state => ({
  location: state.router.location.pathname,
  isConsultantCalled: state.sockets.isConsultantCalled
});

const mapDispatchToProps = {
  getConsultantThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
=======
const HeaderContainer = ({ location, isConsultantCalled, getConsultantThunkCreator }) => (
    <Header 
        location={location}
        isConsultantCalled={isConsultantCalled}
        getConsultant={getConsultantThunkCreator}
    />
);


const mapStateToProps = (state) => ({
    location: state.router.location.pathname,
    isConsultantCalled: state.sockets.isConsultantCalled,
});

const mapDispatchToProps = {
    getConsultantThunkCreator,
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
