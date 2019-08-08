import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';

import { setCurrentItem, addToHistory } from '../actions/items';

const BarCode = ({ addCurrentItem, historyItems }) => {
  const div = (
    <>
      <div>
        <input
          type="text"
          id="vendor_code"
          onChange={(event) => { addCurrentItem(event.target.value, historyItems); }}
        />
      </div>
    </>
  );
  return div;
};

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
        $('#vendor_code').val('');
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BarCode);
