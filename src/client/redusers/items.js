import { 
    ADD_CURR_ITEM, 
    ADD_TO_HISTORY, 
    ADD_TO_BASKET,
    ADD_TO_CAPSULE,
} from '../actions/items';

const initialState = {
    currentItem: {},
    itemsInCapsule: [],
    historyItems: [],
    basketItems: [],  
}


export default function basketItems(state = initialState, action){
    switch(action.type){
        case 'ADD_CURR_ITEM':
            return { ...state, currentItem: action.payload };
        case 'ADD_TO_HISTORY':
                return { ...state, historyItems: state.historyItems.concat(action.payload)}
        case 'ADD_TO_BASKET': 
                return { ...state, basketItems: state.basketItems.concat(action.payload)}
        case 'ADD_TO_CAPSULE':
                return { ...state, itemsInCapsule: action.payload };
        default:
            return state;
    }
}