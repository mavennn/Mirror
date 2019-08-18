import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addToHistory, setCurrentItem } from '../actions/items';

require('dotenv');

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;


const History = ({ history, setItem }) => (
  <div className="history">
    <ul className="flex">
      {
          history.map(item => (
            <li key={item.price + item.id}>
              <img
                src={require(`../assets/img/${item.vendor_code}-1.png`)}
                onClick={() => setItem(item.vendor_code, history)}
              />
              <p>{item.title}</p>
            </li>
          ))
      }
    </ul>
  </div>
);

const mapStateToPropts = state => ({
  history: state.items.historyItems
});

const mapDispatchToProps = dispatch => ({
  setItem: (vendor, history) => {
    axios.get(`http://${ADDRESS}:${PORT}/thing/${vendor}`)
      .then((response) => {
        dispatch(setCurrentItem(response.data));
        if (history.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
          dispatch(addToHistory(response.data));
        }
      });
  }
});

export default connect(mapStateToPropts, mapDispatchToProps)(History);
