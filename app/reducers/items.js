import {
    ADD_CURR_ITEM,
    ADD_TO_HISTORY,
    ADD_TO_BASKET,
    CLEAR_BASKET,
    SET_TO_DEFAULT
} from '../actions/items';

const initialState = {
    currentItem: {},
    historyItems: [],
    basketItems: [],
};


export default function basketItems(state = initialState, action) {
    switch (action.type) {
        case ADD_CURR_ITEM:
            return { ...state, currentItem: action.payload };
        case ADD_TO_HISTORY:
            return { ...state, historyItems: state.historyItems.concat(action.payload) };
        case ADD_TO_BASKET:
            return { ...state, basketItems: state.basketItems.concat(action.payload) };
        case CLEAR_BASKET:
            return {...state, basketItems: action.payload};
        case SET_TO_DEFAULT:
            return { ...state, currentItem: {}, historyItems: [], basketItems: [] };
        default:
            return state;
    }
}
