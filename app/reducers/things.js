import axios from 'axios';
import * as actions from '../actions/things';
import sockets from '../constants/sockets';

require('dotenv');

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const initialState = {
  currentThing: {},
  historyThings: [],
  basketThings: [],
  capsule: [],
  isConsultantComing: false,
};


export default function things(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_CURR_THING:
      return { ...state, currentThing: action.payload };
    case actions.ADD_TO_HISTORY:
      return { ...state, historyThings: state.historyThings.concat(action.payload) };
    case actions.ADD_TO_BASKET:
      return { ...state, basketThings: state.basketThings.concat(action.payload) };
    case actions.CLEAR_BASKET:
      return { ...state, basketThings: action.payload };
    case actions.SET_TO_DEFAULT:
      return {
        ...state, currentThing: {}, historyThings: [], basketThings: []
      };
    default:
      return state;
  }
}

export const changeSize = size => (dispatch, getState) => {
  const state = getState();
  const thing = state.things.currentThing;
  thing.size = size
  if (size) {
    dispatch(actions.setCurrentThing(thing));
  }
}

export const setCurrentThingThunkCreator = barcode => (dispatch, getState) => {
  const state = getState();
  const { historyThings } = state.things;
  axios.get(`http://${ADDRESS}:${PORT}/thing/${barcode}`)
    .then((response) => {
      const isExist = historyThings.findIndex(x => x.vendorid === response.data.vendorid);
      dispatch(actions.setCurrentThing(response.data));
      if (isExist === -1) {
        dispatch(actions.addToHistory(response.data));
      }
    });
};

export const addToBasketThunkCreator = thing => (dispatch, getState) => {
  if (thing) {
    const state = getState();
    const basket = state.things.basketThings;
    const index = basket.findIndex(x => x.vendorid === thing.vendorid && x.size === thing.size);
    if (index === -1) {
      dispatch(actions.addToBasket(thing));
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
