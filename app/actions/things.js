export const ADD_CURR_THING = 'ADD_CURR_THING';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';

export const setCurrentThing = thing => ({
  type: 'ADD_CURR_THING',
  payload: thing
});

export const changeSize = size => ({
  type: 'CHANGE_SIZE',
  payload: size,
});

export const changeColor = (color, vendorid) => ({
  type: 'CHANGE_COLOR',
  color,
  vendorid,
});

export const addToHistory = thing => ({
  type: 'ADD_TO_HISTORY',
  payload: thing
});

export const addToBasket = thing => ({
  type: 'ADD_TO_BASKET',
  payload: thing
});

export const removeFromBasket = index => ({
  type: 'REMOVE_FROM_BASKET',
  payload: index,
});

export const clearBasket = () => ({
  type: 'CLEAR_BASKET',
  payload: []
});


export const setToDefault = () => ({
  type: 'SET_TO_DEFAULT',
  payload: {
    currentItem: {},
    historyItems: [],
    basketItems: [],
  }
});
