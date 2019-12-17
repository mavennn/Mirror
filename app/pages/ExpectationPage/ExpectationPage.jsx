import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './ExpectationPage.css';

import Emoji from '../../components/Emoji/Emoji';

const Expectation = ({ setToDefault, history, clearBasket }) => (
  <div className={styles.expectation}>
    <div className={styles.expectation__welcome_text}>
      <h1 className="expectation">Привет!</h1>
      <p>
        Я - умное зеркало, я помогу тебе с выбором одежды
        <Emoji symbol="✌️" />
        <Emoji symbol="👖" />
        <Emoji symbol="👗" />
      </p>
    </div>
    <div className={styles.expectation__buttons}>
      <Link
        className={styles.expectation__button}
        to={routes.HOME}
        onClick={() => {
          setToDefault();
        }}
      >
        НАЧАТЬ ЗАНОВО
      </Link>
      <Link
        className={styles.expectation__button}
        to=""
        onClick={() => history.goBack()}
      >
        ПРОДОЛЖИТЬ
      </Link>
    </div>
  </div>
);

export default Expectation;
