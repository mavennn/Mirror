import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

require('dotenv').config();

const PORT = process.env.SERVER_PORT;
const SERVER = process.env.SERVER_ADDRESS;

const ThingCard = ({ thingId }) => {
  const [thing, setThing] = useState({
    id: '',
    name: '',
    picture: '',
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
    <li key={thing.id} className="border category-card" onClick={() => {}}>
      <div>
        <h2>{thing.name}</h2>
      </div>
    </li>
  );
};

export default connect()(ThingCard);
