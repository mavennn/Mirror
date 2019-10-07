import axios from 'axios';
import Swal from 'sweetalert2';
import * as actions from '../actions/things';
import sockets from '../constants/sockets';
import Thing from '../../.configs/thing';

require('dotenv').config();

const ADDRESS = process.env.SERVER_ADDRESS;
const PORT = process.env.SERVER_PORT;

const initialState = {
  currentThing: {},
  historyThings: [],
  basketThings: [],
  capsule: [],
  isConsultantCalled: false,
};


export default function things(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_CURR_THING:
      return { ...state, currentThing: action.payload };
    case actions.CHANGE_SIZE:
      return { ...state, currentThing: { ...state.currentThing, size: action.payload } };
    case actions.CHANGE_COLOR:
      return { ...state, currentThing: { ...state.currentThing, color: action.color, vendorid: action.vendorid } };
    case actions.ADD_TO_HISTORY:
      return { ...state, historyThings: state.historyThings.concat(action.payload) };
    case actions.ADD_TO_BASKET:
      return { ...state, basketThings: state.basketThings.concat(action.payload) };
    case actions.REMOVE_FROM_BASKET:
      return { ...state, basketThings: state.basketThings.slice(0, action.payload).concat(state.basketThings.slice(action.payload + 1)) };
    case actions.CLEAR_BASKET:
      return { ...state, basketThings: action.payload };
    case actions.SET_TO_DEFAULT:
      return {
        ...state, currentThing: {}, historyThings: [], basketThings: []
      };
    case 'GET_CONSULTANT': 
      return { ...state, isConsultantCalled: true }
    case 'CANCEL_CONSULTANT':
      return { ...state, isConsultantCalled: false }
    default:
      return state;
  }
}

export const setThingFromRecs = (thing) => {
  
};

export const setToDefaultThunkCreator = () => (dispatch, getState) => {
  const state = getState();
  const { socket } = state.sockets;
  socket.emit('clearRoom', process.env.ROOM);
  dispatch(actions.setToDefault());
};

export const changeSizeThunkCreator = size => (dispatch) => {
  if (size) {
    dispatch(actions.changeSize(size));
  }
};

export const changeColorThunkCreator = (color, vendorid) => (dispatch) => {
  if (color) {
    dispatch(actions.changeColor(color, vendorid));
  }
};

export const removeFromBasketThunkCreator = thing => (dispatch, getState) => {
  if (thing) {
    const state = getState();
    const basket = state.things.basketThings;
    const index = basket.findIndex(x => x.vendorid === thing.vendorid && x.size === thing.size && x.color === thing.color);
    dispatch(actions.removeFromBasket(index));
  }
};



// по баркоду вытаскивает с сервера инфу о вещи, и если ее не было в истории
// то засовывает ее в историю
export const setCurrentThingThunkCreator = barcode => (dispatch, getState) => {
  const state = getState();
  const { historyThings } = state.things;
  axios.get(`http://${ADDRESS}:${PORT}/thing/${barcode}`)
    .then((response) => {
      let thingObject = new Thing(response.data);
      dispatch(actions.setCurrentThing(thingObject));
      if (historyThings.findIndex(x => x.vendorcode === thingObject.vendorcode) === -1) {
        dispatch(actions.addToHistory(thingObject));
      }
    });
};

// Добавление вещи в корзину
// смотрит в корзине вещь с таким же вендором и размером
// если не находит, то добавляет в корзину
export const addToBasketThunkCreator = thing => (dispatch, getState) => {
  if (thing) {
    const state = getState();
    const basket = state.things.basketThings;
    const index = basket.findIndex(x => x.vendorid === thing.vendorid && x.size === thing.size && x.color === thing.color);
    if (index === -1) {
      dispatch(actions.addToBasket(thing));
      Swal.fire({
        title: 'Товар добавлен в корзину!',
        type: 'success',
        timer: '2000',
        customClass: {
          popup: 'alertContainer',
          title: 'alertTitle',
        }
      });
    } else {
      Swal.fire({
        title: 'Товар уже есть в корзине!',
        type: 'info',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'alertContainer',
          title: 'alertTitle',
        }
      });
    }
  } else {
    alert('выберите размер');
  }
};

export const mutualQueryParams = () => ({
  roomNumber: process.env.ROOM,
  inProcessing: false,
  time: `${new Date().getHours()}:${new Date().getMinutes()}`,
  consultantName: '',
});

export const createCallCansultantQuery = () => Object.assign({ text: sockets.CALL_TEXT }, mutualQueryParams());

export const createBringThingQuery = (title, vendorCode, size, price) => {
  const bringThingParams = {
    title,
    vendorCode,
    size,
    price,
    text: sockets.BRING_TEXT,
    type: sockets.BRING_THING
  };
  return Object.assign(bringThingParams, mutualQueryParams());
};

// eslint-disable-next-line no-shadow,max-len
export const createToCheckoutQuery = things => Object.assign({ text: sockets.TO_CHECKOUT_TEXT, type: sockets.TO_CHECKOUT, things }, mutualQueryParams());

export const sendCallConsultantQueryToServer = (socket) => {
  const query = createCallCansultantQuery();
  socket.emit('getConsultant', query);
  Swal.fire({
    title: 'Консультант вызван',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    }
  });
};

export const sendBringThingQueryToServer = (socket, ...params) => {
  const query = createBringThingQuery(...params);
  socket.emit('getConsultant', query);
  Swal.fire({
    title: 'Вашу вещь сейчас принесут',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    }
  });
};

export const sendToCheckOutQueryToServer = (socket, ...params) => {
  const query = createToCheckoutQuery(...params);
  console.log(query);
  Swal.fire({
    title: 'Сейчас отнесем на кассу :)',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    }
  });
  socket.emit('getConsultant', query);
};

export const getConsultantThunkCreator = (type, ...params) => (dispatch, getState) => {
  const state = getState();
  const { socket } = state.sockets;
  const { isConsultantCalled } = state.things;
  switch (type) {
    case sockets.CALL_CONSULTANT:
      sendCallConsultantQueryToServer(socket);
      break;
    case sockets.BRING_THING:
      sendBringThingQueryToServer(socket, ...params);
      break;
    case sockets.TO_CHECKOUT:
      sendToCheckOutQueryToServer(socket, params);
      break;
    default:
      console.log('undefined type');
  }
  dispatch({ type: 'GET_CONSULTANT' });
};

export const cancelConsultantThunkCreator = () => (dispatch) => {

  /*
    здесь должен socket.emit...
  */

  Swal.fire({
    title: 'Вызов отменен',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle',
    }
  });

  dispatch({ type: 'CANCEL_CONSULTANT' });
};
