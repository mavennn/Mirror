import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentItemThunkCreator } from '../../reducers/items';

const Capsule = ({ thing, setCurrentItemThunkCreator }) => (
  <div className="capsule w-50">
    <ul className="flex flex-wrap ma3">
      {
            thing.capsule.map(item => (
              <li key={item.vendor_code} className="ma1">
                <img
                  src={require(`../../assets/img/${item.vendor_code}-1.png`)}
                  onClick={() => setCurrentItemThunkCreator(item.vendor_code)}
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
Capsule.propTypes = {
  thing: PropTypes.object,
  setCurrentItemThunkCreator: PropTypes.func,
}

export default connect(mapStateToProps, { setCurrentItemThunkCreator })(Capsule);
