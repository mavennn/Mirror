<<<<<<< HEAD
import io from 'socket.io-client';
import Swal from 'sweetalert2';
import env from '../../utils';
=======
import io from "socket.io-client";
import env from '../../utils';
import Swal from 'sweetalert2';
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
import * as sockets from '../../constants/sockets';

const SERVER = env.getServer();
const PORT = env.getPort();
const ROOM = env.getRoomNumber();

export const SET_SOCKET = 'SET_SOCKET';
export const GET_CONSULTANT = 'GET_CONSULTANT';
export const CANCEL_CONSULTANT = 'CANCEL_CONSULTANT';

export const setSocket = () => dispatch => {
  const socket = io(`http://${SERVER}:${PORT}/rooms`);
  socket.emit('newRoomConnection', ROOM);
  dispatch({ type: SET_SOCKET, payload: socket });
};

<<<<<<< HEAD
/* --------------------- ОБЩИЕ ПАРАМЕТРЫ --------------------- */
=======
/*--------------------- ОБЩИЕ ПАРАМЕТРЫ --------------------- */
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a

export const mutualQueryParams = () => ({
  roomNumber: env.getRoomNumber(),
  inProcessing: false,
  time: `${new Date().getHours()}:${new Date().getMinutes()}`,
  consultantName: ''
});

<<<<<<< HEAD
/* --------------------- ПРОСТО ВЫЗВАТЬ КОНСУЛЬТАНТА --------------------- */

export const createCallCansultantQuery = () => ({
  text: sockets.CALL_TEXT,
  ...mutualQueryParams()
});

export const sendCallConsultantQueryToServer = socket => dispatch => {
  const query = createCallCansultantQuery();
  socket.emit('getConsultant', query);
  Swal.fire({
    title: 'Консультант вызван',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle'
    }
  });

  dispatch({ type: GET_CONSULTANT });
};

/* --------------------- ПРИНЕСТИ ОДНУ ВЕЩЬ --------------------- */

=======
/*--------------------- ПРОСТО ВЫЗВАТЬ КОНСУЛЬТАНТА --------------------- */

export const createCallCansultantQuery = () => Object.assign({ text: sockets.CALL_TEXT }, mutualQueryParams());

export const sendCallConsultantQueryToServer = (socket) => (dispatch) => {
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

  dispatch({ type: GET_CONSULTANT });
};

/*--------------------- ПРИНЕСТИ ОДНУ ВЕЩЬ --------------------- */

>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
export const createBringThingQuery = (title, vendorcode, size, price) => {
  const bringThingParams = {
    title,
    vendorcode,
    size,
    price,
    text: sockets.BRING_TEXT,
    type: sockets.BRING_THING
  };
  return Object.assign(bringThingParams, mutualQueryParams());
};

<<<<<<< HEAD
export const sendBringThingQueryToServer = (socket, ...params) => dispatch => {
=======
export const sendBringThingQueryToServer = (socket, ...params) => (dispatch) =>{
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
  const query = createBringThingQuery(...params);
  socket.emit('getConsultant', query);
  Swal.fire({
    title: 'Вашу вещь сейчас принесут',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle'
    }
  });
  dispatch({ type: GET_CONSULTANT });
};

<<<<<<< HEAD
/* --------------------- ОТНЕСТИ НА КАССУ --------------------- */

// eslint-disable-next-line no-shadow,max-len
export const createToCheckoutQuery = things => ({
  text: sockets.TO_CHECKOUT_TEXT,
  type: sockets.TO_CHECKOUT,
  things,
  ...mutualQueryParams()
});

export const sendToCheckOutQueryToServer = (socket, ...params) => dispatch => {
=======
/*--------------------- ОТНЕСТИ НА КАССУ --------------------- */

// eslint-disable-next-line no-shadow,max-len
export const createToCheckoutQuery = things => Object.assign({ text: sockets.TO_CHECKOUT_TEXT, type: sockets.TO_CHECKOUT, things }, mutualQueryParams());

export const sendToCheckOutQueryToServer = (socket, ...params) => (dispatch) => {
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
  const query = createToCheckoutQuery(...params);
  Swal.fire({
    title: 'Сейчас отнесем на кассу :)',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle'
    }
  });
  socket.emit('getConsultant', query);
  dispatch({ type: GET_CONSULTANT });
};

<<<<<<< HEAD
/* --------------------- ОТМЕНА ВЫЗОВА КОНСУЛЬТАНТА --------------------- */

export const createCancelConsultantQuery = () => ({
  text: sockets.CANCEL_CONSULTANT,
  ...mutualQueryParams()
});

export const sendCancelConsultantQueryToServer = socket => dispatch => {
=======
/*--------------------- ОТМЕНА ВЫЗОВА КОНСУЛЬТАНТА --------------------- */

export const createCancelConsultantQuery = () => Object.assign({ text: sockets.CANCEL_CONSULTANT }, mutualQueryParams());

export const sendCancelConsultantQueryToServer = (socket) => (dispatch) => {
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
  const query = createCancelConsultantQuery();
  socket.emit('cancelConsultant', query);
  Swal.fire({
    title: 'Вызов отменен',
    timer: 1000,
    type: 'success',
    customClass: {
      popup: 'alertContainer',
      title: 'alertTitle'
    }
  });
  dispatch({ type: CANCEL_CONSULTANT });
};

<<<<<<< HEAD
/* --------------------- ОСНОВАНАЯ ФУНКЦИЯ ВЫЗОВА КОНСУЛЬТАНТА --------------------- */

export const getConsultantThunkCreator = (type, ...params) => (
  dispatch,
  getState
) => {
=======
/*--------------------- ОСНОВАНАЯ ФУНКЦИЯ ВЫЗОВА КОНСУЛЬТАНТА --------------------- */

export const getConsultantThunkCreator = (type, ...params) => (dispatch, getState) => {
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
  const state = getState();
  const { socket } = state.sockets;
  const { title, vendorcode, price, size } = state.currentThing;
  const { basketThings } = state.basketThings;
  switch (type) {
    case sockets.CALL_CONSULTANT:
      dispatch(sendCallConsultantQueryToServer(socket));
      break;
    case sockets.BRING_THING:
<<<<<<< HEAD
      dispatch(
        sendBringThingQueryToServer(socket, title, vendorcode, price, size)
      );
=======
      dispatch(sendBringThingQueryToServer(socket, title, vendorcode, price, size));
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
      break;
    case sockets.TO_CHECKOUT:
      dispatch(sendToCheckOutQueryToServer(socket, basketThings));
      break;
    case sockets.CANCEL_CONSULTANT:
      dispatch(sendCancelConsultantQueryToServer(socket));
      break;
    default:
      console.log('undefined type');
  }
};
<<<<<<< HEAD
=======

>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
