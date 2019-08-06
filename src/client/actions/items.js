export const ADD_CURR_ITEM = 'ADD_CURR_ITEM';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';
export const ADD_TO_CAPSULE = 'ADD_TO_CAPSULE';

export const setCurrenItem = (item) => {
   return { 
       type: 'ADD_CURR_ITEM', 
       payload: item
    };
}  

export const addToHistory = (item) => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: item
    }
}

export const addToBasket = (item) => {
    return {
        type: 'ADD_TO_BASKET',
        payload: item
    }
}

export const addToCapsule = (items) => {
    return {
        type: 'ADD_TO_CAPSULE',
        payload: items
    }
}

export const setToDefault = () => {
    return {
        type: 'SET_TO_DEFAULT',
        payload: undefined
    }
}