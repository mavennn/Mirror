import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentItem } from '../actions/items';

const History = ({ historyItems, setCurrentItem }) => (
  <div id="history">
    <ul>
      {historyItems.map(i => (
        <li key={i.vendor_code}>
          <img
            src={require(`../assets/img/${i.vendor_code}-1.png`)}
            onClick={() => { setCurrentItem(i); }}
            alt="img"
          />
          <p>{i.title}</p>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  historyItems: state.items.historyItems,
});

const mapDispatchToProps = {
  setCurrentItem,
};

History.defaultProps = {
  historyItems: PropTypes.array,
  setCurrenItem: PropTypes.func,
};

History.propTypes = {
  historyItems: PropTypes.arrayOf,
  setCurrenItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
