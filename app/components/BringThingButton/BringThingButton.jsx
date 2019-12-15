import React from 'react';
import styles from './BringThingButton.css';
import * as sockets from '../../constants/sockets';

const BringThingButton = ({ getConsultant }) => (
  <div>
    <button
      className={styles.user_button}
      onClick={() => getConsultant(sockets.BRING_THING)}
    >
      Принести
    </button>
  </div>
);

export default BringThingButton;
