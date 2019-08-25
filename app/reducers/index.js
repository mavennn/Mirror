// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import things from './things';
import sockets from './sockets';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    things,
    sockets,
  });
}
