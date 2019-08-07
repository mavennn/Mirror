import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';

import { setCurrentItem, addToHistory } from '../actions/items';

class BarCode extends React.Component {
  componentDidMount() {
    const input = $('#vendor_code');
    input.focus();
    input.change(() => {
      const vendorCode = input.val();
      if (vendorCode.length >= 7) {
        axios.get(`http://localhost:8080/thing/${vendorCode}`)
          .then((response) => {
            this.props.setCurrentItem(response.data);
            if (this.props.historyItems.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
              this.props.addToHistory(response.data);
            }
          });
            input.val('');
      }
    });
  }

  render() {
    const div = (
      <>
        <div>
          <input
            type="text"
            id="vendor_code"
          />
        </div>
      </>
    );
    return div;
  }
}

const mapStateToProps = state => ({
  historyItems: state.items.historyItems,
});

const mapDispatchToProps = {
  setCurrentItem,
  addToHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarCode);
