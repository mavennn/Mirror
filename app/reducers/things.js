import axios from 'axios';
import Swal from 'sweetalert2';
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
    default:
      return state;
  }
}

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
}

// по баркоду вытаскивает с сервера инфу о вещи, и если ее не было в истории
// то засовывает ее в историю
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

// export const removeFromBasket = thing => (dispatch, getState) => {
//   if (thing) {
//     const state = getState();
//     const basket = state.things.basketThings;
//     const index = basket.findIndex(x => x.vendorid === thing.vendorid && x.size === thing.size && x.color === thing.color);
//     basket.splice(index, 1);
//     console.log(basket);
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       type: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.value) {
//         Swal.fire(
//           'Deleted!',
//           'Your file has been deleted.',
//           'success'
//         );
//       }
//     });
//     dispatch(actions.fillingBasket(basket));
//   }
// };

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
