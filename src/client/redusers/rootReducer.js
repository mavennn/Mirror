import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import { SET_TO_DEFAULT } from '../actions/items';

const appReducer =  combineReducers({
    routing: routerReducer,
    items,
});

const rootReduce = (state, action) =>{
    if(action.type === "SET_TO_DEFAULT"){
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReduce;