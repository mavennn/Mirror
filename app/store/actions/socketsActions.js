import io from "socket.io-client";

require('dotenv').config();
const SERVER = process.env.SERVER_ADDRESS || '192.168.1.231';
const PORT = process.env.SERVER_PORT || '3123';
const ROOM = process.env.ROOM;

export const SET_SOCKET = 'SET_SOCKET';
export const SET_QUERY = 'SEND_QUERY';

export const setSocket = () => {
  return dispatch => {
    const socket = io(`http://${SERVER}:${PORT}/rooms`);
    socket.emit('newRoomConnection', ROOM);
    dispatch({ type: SET_SOCKET, payload: socket });
  }
};

export const setQuery = data => ({
  type: SET_QUERY,
  payload: data
});

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
