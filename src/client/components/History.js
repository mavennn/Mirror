import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { addToHistory, setCurrentItem } from '../actions/items';

const History = ({ historyItems, addCurrentItem }) => (
  <div id="history">
    <ul>
      {historyItems.map(i => (
        <li key={i.vendor_code}>
          <img
            src={require(`../assets/img/${i.vendor_code}-1.png`)}
            onClick={() => addCurrentItem(i.vendor_code, historyItems)}
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

const mapDispatchToProps = dispatch => ({
  addCurrentItem: (vendorCode, history) => {
    axios.get(`http://localhost:8080/thing/${vendorCode}`)
      .then((response) => {
        dispatch(setCurrentItem(response.data));
        if (history.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
          dispatch(addToHistory(response.data));
        }
      });
  },
});

History.defaultProps = {
  historyItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: 'ФУТБОЛКА ЖЕНСКАЯ',
      price: 1299,
      id_capsule: '2',
      color: 'green',
      image_url: '',
      images_count: 3,
      vendor_code: 'ETSW1499XS',
      id: '8',
    })
  ),
  addCurrentItem: PropTypes.func,
};

History.propTypes = {
  historyItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id_capsule: PropTypes.string,
      color: PropTypes.string,
      image_url: PropTypes.string,
      images_count: PropTypes.number,
      vendor_code: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  addCurrentItem: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
