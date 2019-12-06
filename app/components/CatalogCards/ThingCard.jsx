import React from 'react';
import { connect } from 'react-redux';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';
import { history } from '../../store/configureStore';
import routes from '../../constants/routes';

const ThingCard = ({ thing, fetchThingInfo }) => {
  return (
    <div
      className="category-card"
      onClick={() => {
        fetchThingInfo(thing.ware);
        history.push(routes.HOME);
      }}
    >
      <div>
        <img src={thing.pictures[0]} />
        <p>{thing.name}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchThingInfo,
};

export default connect(null, mapDispatchToProps)(ThingCard);
