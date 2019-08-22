import axios from 'axios';
import {
  ADD_CURR_ITEM,
  ADD_TO_HISTORY,
  ADD_TO_BASKET,
  CLEAR_BASKET,
  SET_TO_DEFAULT,
} from '../actions/items';
import sockets from '../constants/sockets';

require('dotenv');

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const initialState = {
  currentItem: {},
  historyItems: [],
  basketItems: [],
  isConsultantComing: false,
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

export const addToBasket = item => ({
  type: 'ADD_TO_BASKET',
  payload: item
});

export const clearBasket = () => ({
  type: 'CLEAR_BASKET',
  payload: []
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

export const addToBasketThunkCreator = (item, size) => (dispatch, getState) => {
  if (size) {
    const state = getState();
    const basket = state.items.basketItems;
    const index = basket.findIndex(x => x.vendor_code === item.vendor_code && x.sizes[0] === size);
    if (index === -1) {
      dispatch(addToBasket({ ...item, sizes: [size] }));
    } else if (basket[index].sizes[0] !== size) {
      basket[index].sizes.push(size);
    } else {
      alert('товар уже есть в корзине');
    }
  } else {
    alert('выберите размер');
  }
};

export const getConsultantThunkCreator = (type, ...params) => (dispatch, getState) => {
  const roomNumber = process.env.ROOM;
  let query = {};
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;
  const state = getState();
  const { socket } = state.sockets;
  switch (type) {
    case sockets.CALL_CONSULTANT:
      query = {
        time, type, roomNumber, text: sockets.CALL_TEXT
      };
      break;
    case sockets.BRING_THING:
      const [title, vendorCode, size, price] = params;
      query = {
        time, type, roomNumber, text: sockets.BRING_TEXT, title, vendorCode, size, price
      };
      break;
    case sockets.TO_CHECKOUT:
      const [things] = params;
      query = {
        time, type, text: sockets.TO_CHECKOUT_TEXT, roomNumber, things
      };
      break;
    default:
      console.log('undefined type');
  }
  console.log(query);
  socket.emit('getConsultant', query);
};
