export const FETCH_THING_INFO_REQUEST = 'FETCH_THING_INFO_REQUEST';
export const FETCH_THING_INFO_SUCCESS = 'FETCH_THING_INFO_SUCCESS';
export const FETCH_THING_INFO_FAILURE = 'FETCH_THING_INFO_FAILURE';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';

require('dotenv').config();

const SERVER = process.env.SERVER_ADDRESS || '192.168.1.231';
const PORT = process.env.SERVER_PORT || '3123';

export const fetchThingInfoRequest = () => ({
  type: FETCH_THING_INFO_REQUEST,
});

export const fetchThingInfoSuccess = (thing) => ({
  type: FETCH_THING_INFO_SUCCESS,
  payload: thing,
});

export const fetchThingInfoFailure = (error) => ({
  type: FETCH_THING_INFO_FAILURE,
  payload: error,
});

export const changeSize = (size) => ({
  type: CHANGE_SIZE,
  payload: size,
});

export const changeColor = (color) => ({
  type: CHANGE_COLOR,
  payload: color,
});

export const addToHistory = (thing) => ({
  type: ADD_TO_HISTORY,
  payload: thing,
});

export const setToDefault = () => ({
  type: SET_TO_DEFAULT,
});

export const fetchThingInfo = (barcode) => (dispatch, getState) => {
  dispatch(fetchThingInfoRequest());
  return fetch(`http://${SERVER}:${PORT}/thing/ware/${barcode}`)
    .then((response) => response.json())
    .then((thing) => {
      if (thing.type === 'Success') {
        dispatch(fetchThingInfoSuccess(thing.data));
        if (
          getState().currentThing.history.findIndex(
            (x) => x.ware === thing.ware,
          ) === -1
        ) {
          dispatch(
            addToHistory({
              // тут формируется объект информации для маленькой карточки товара
              name: thing.data.name,
              picture: thing.data.pictures[0],
              ware: thing.data.ware,
              pid: thing.data.pid,
              price: thing.data.price,
            }),
          );
        }
      } else {
        alert('такой вещи нет');
      }
    })
    .catch((error) => dispatch(fetchThingInfoFailure(error)));
};
