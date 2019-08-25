export const ADD_CURR_THING = 'ADD_CURR_THING';
export const ADD_REC = 'ADD_REC';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';

export const setCurrentThing = thing => ({
  type: 'ADD_CURR_THING',
  payload: thing
});

export const addRec = rec => ({
  type: 'ADD_REC',
  payload: rec,
})

export const addToHistory = thing => ({
  type: 'ADD_TO_HISTORY',
  payload: thing
});

export const addToBasket = thing => ({
  type: 'ADD_TO_BASKET',
  payload: thing
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
