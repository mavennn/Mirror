export const ADD_CURR_ITEM = 'ADD_CURR_ITEM';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';

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

export const setToDefault = () => ({
    type: 'SET_TO_DEFAULT',
    payload: {
        currentItem: {},
        historyItems: [],
        basketItems: [],
    }
});
