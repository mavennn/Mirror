import React from 'react';
import { connect } from 'react-redux';
import { setCurrentItemThunkCreator } from '../../reducers/items';


const History = ({ history, setCurrentItemThunkCreator }) => (
  <div className="history">
    <ul className="flex">
      {
          history.map(item => (
            <li key={item.price + item.id}>
              <img
                src={require(`../../assets/img/${item.vendor_code}-1.png`)}
                onClick={() => setCurrentItemThunkCreator(item.vendor_code)}
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

export default connect(mapStateToPropts, { setCurrentItemThunkCreator })(History);
