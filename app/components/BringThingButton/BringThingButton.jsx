import React from 'react';
import * as sockets from '../../constants/sockets';

const BringThingButton = ({ getConsultant }) => (
    <div>
        <button onClick={() => getConsultant(sockets.BRING_THING)}>
            Принести
        </button>
    </div>
);

export default BringThingButton;