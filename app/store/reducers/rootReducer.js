// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import currentThingReducer from './currentThingReducer';
import socketsReducer from './socketsReducer';
import basketThingsReducer from './basketThingReducer';
import catalogReducer from './catalogReducer';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    currentThing: currentThingReducer,
    sockets: socketsReducer,
    basketThings: basketThingsReducer,
    catalog: catalogReducer,
  });
}
