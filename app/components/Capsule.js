import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { addToHistory, setCurrentItem } from '../actions/items';

require('dotenv')

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;


const Capsule = ({ thing, history, setItem }) => (
  <div className="capsule w-50">
    <ul className="flex flex-wrap ma3">
      {
            thing.capsule.map(item => (
              <li key={item.vendor_code} className="ma1">
                <img
                  src={require(`../assets/img/${item.vendor_code}-1.png`)}
                  onClick={() => setItem(item.vendor_code, history)}
                />
              </li>
            ))
          }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  thing: state.items.currentItem,
  history: state.items.historyItems
});

const mapDispatchToProps = dispatch => ({
  setItem: (vendor, history) => {
    axios.get(`http://${ADDRESS}:${PORT}/thing/${vendor}`)
      .then((response) => {
        dispatch(setCurrentItem(response.data));
        if (!history.includes(response.data)) {
          dispatch(addToHistory(response.data));
        }
      });
  }
});

Capsule.propTypes = {
  thing: PropTypes.object,
  history: PropTypes.array,
  setItem: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Capsule);
