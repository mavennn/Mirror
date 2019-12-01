import React from 'react';
import * as sockets from '../../constants/sockets';

const BringThingButton = ({ getConsultant }) => (
<<<<<<< HEAD
  <div>
    <button onClick={() => getConsultant(sockets.BRING_THING)}>Принести</button>
  </div>
=======
    <div>
        <button onClick={() => getConsultant(sockets.BRING_THING)}>
            Принести
        </button>
    </div>
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
);

export default BringThingButton;
