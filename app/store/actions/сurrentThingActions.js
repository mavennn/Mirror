// fetch thing info
import { CLEAR_BASKET } from './basketThingsActions';

export const FETCH_THING_INFO_REQUEST = 'FETCH_THING_INFO_REQUEST';
export const FETCH_THING_INFO_SUCCESS = 'FETCH_THING_INFO_SUCCESS';
export const FETCH_THING_INFO_FAILURE = 'FETCH_THING_INFO_FAILURE';

// fetch recs info
export const FETCH_RECS_REQUEST = 'FETCH_RECS_REQUEST';
export const FETCH_RECS_SUCCESS = 'FETCH_RECS_SUCCESS';
export const FETCH_RECS_FAILURE = 'FETCH_RECS_FAILURE';

// fetch recs
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';

require('dotenv').config();

const SERVER = process.env.SERVER_ADDRESS || '192.168.1.231';
const PORT = process.env.SERVER_PORT || '3123';

/* -------- Добавить в историю -------- */
export const addToHistory = (thing) => ({
  type: ADD_TO_HISTORY,
  payload: thing,
});

/* ------------------- Получить список рекоммендаций -------------------*/

export const fetchRecsRequest = () => ({
  type: FETCH_RECS_REQUEST,
});

export const fetchRecsSuccess = (recs) => ({
  type: FETCH_RECS_SUCCESS,
  recs,
});

export const fetchRecsFailure = (error) => ({
  type: FETCH_RECS_FAILURE,
  error,
});

export const fetchRecs = (barcode) => (dispatch) => {
  dispatch(fetchRecsRequest(barcode));
  const url = `http://${SERVER}:${PORT}/thingRecs/${barcode}`;
  return fetch(url)
    .then((response) => response.json())
    .then((recs) => {
      if (recs.length !== 0) {
        dispatch(fetchRecsSuccess(recs));
      }
    })
    .catch((error) => dispatch(fetchRecsFailure(error)));
};

/* ------------------- Получить информацию о вещи -------------------*/
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

export const fetchThingInfo = (barcode) => (dispatch, getState) => {
  const re = /^[0-9]{10,}$/;
  const barcodeIsValid = re.test(barcode);
  if (!barcodeIsValid) return alert('Invalid barcode');
  dispatch(fetchThingInfoRequest());
  const url = `http://${SERVER}:${PORT}/thing/barcode/${barcode}`;
  return fetch(url)
    .then((response) => response.json())
    .then((thing) => {
      if (thing.name !== undefined) {
        dispatch(fetchThingInfoSuccess(thing));
        if (
          getState().currentThing.history.findIndex(
            (x) => x.name === thing.name
          ) === -1
        ) {
          dispatch(
            addToHistory({
              // тут формируется объект информации для маленькой карточки товара
              barcode: thing.barcode,
              pid: thing.pid,
              name: thing.name,
              image: thing.pictures[0],
              price: thing.price,
            })
          );
        }
      } else {
        alert('такой вещи нет');
      }
    })
    .catch((error) => dispatch(fetchThingInfoFailure(error)));
};

/* -------- Изменить размер -------- */
export const changeSize = (size) => ({
  type: CHANGE_SIZE,
  payload: size,
});

/* -------- Изменить цвет -------- */
export const changeColor = (color) => ({
  type: CHANGE_COLOR,
  payload: color,
});
/* -------- Сбросить по умолчанию -------- */
export const setToDefault = () => (dispatch) => {
  dispatch({ type: SET_TO_DEFAULT });
  dispatch({ type: CLEAR_BASKET });
};
