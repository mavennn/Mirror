import axios from 'axios';
import {
  ADD_CURR_ITEM,
  ADD_TO_HISTORY,
  ADD_TO_BASKET,
  CLEAR_BASKET,
  SET_TO_DEFAULT
} from '../actions/items';

require('dotenv');

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const initialState = {
  currentItem: {},
  historyItems: [],
  basketItems: [],
};


export default function basketItems(state = initialState, action) {
  switch (action.type) {
    case ADD_CURR_ITEM:
      return { ...state, currentItem: action.payload };
    case ADD_TO_HISTORY:
      return { ...state, historyItems: state.historyItems.concat(action.payload) };
    case ADD_TO_BASKET:
      return { ...state, basketItems: state.basketItems.concat(action.payload) };
    case CLEAR_BASKET:
      return { ...state, basketItems: action.payload };
    case SET_TO_DEFAULT:
      return {
        ...state, currentItem: {}, historyItems: [], basketItems: []
      };
    default:
      return state;
  }
}

export const setCurrentItem = item => ({
  type: 'ADD_CURR_ITEM',
  payload: item
});

export const addToHistory = item => ({
  type: 'ADD_TO_HISTORY',
  payload: item
});

export const setCurrentItemThunkCreator = vendorCode => (dispatch, getState) => {
  const state = getState();
  const history = state.items.historyItems;
  console.log(vendorCode);
  axios.get(`http://${ADDRESS}:${PORT}/thing/${vendorCode}`)
    .then((response) => {
      dispatch(setCurrentItem(response.data));
      if (history.findIndex(x => x.vendor_code === response.data.vendor_code) === -1) {
        dispatch(addToHistory(response.data));
      }
    });
};
