import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchThingInfo } from '../../store/actions/сurrentThingActions';

require('dotenv').config();

const PORT = process.env.SERVER_PORT;
const SERVER = process.env.SERVER_ADDRESS;

const ThingCard = ({ thingId, fetchThingInfo }) => {
  const [thing, setThing] = useState({
    id: '',
    name: '',
    picture: '',
    ware: '',
  });

  const [pic, setPic] = useState('');

  useEffect(() => {
    fetch(`http://${SERVER}:${PORT}/thing/pid/${thingId}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.type === 'Success') {
          setThing(response.data);
          setPic(response.data.picture);
        } else {
          // alert('Упс, сломалось :(');
        }
      });
  }, []);

  return (
    <div
      className="category-card"
      onClick={() => fetchThingInfo(thing.ware)}
    >
      <div>
        <img src={thing.picture} />
        <p>{thing.name}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchThingInfo,
};

export default connect(null, mapDispatchToProps)(ThingCard);
