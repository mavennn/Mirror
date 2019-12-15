import React from 'react';
import styles from './Header.css';

// icons
import AlarmButton from './AlarmButton';
import CatalogButton from './CatalogButton';
import BasketButton from './BasketButton';
import MirrorButton from './MirrorButton';

const Header = ({ location, isConsultantCalled, getConsultant }) => (
  <>
    <div className={styles.header}>
      <AlarmButton
        isConsultantCalled={isConsultantCalled}
        getConsultant={getConsultant}
      />
      <CatalogButton location={location} backFunc={history.goBack} />
      <BasketButton location={location} goBackFunc={history.goBack} />
      <MirrorButton />
    </div>
  </>
);

export default Header;
