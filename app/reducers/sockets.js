import {
  SET_SOCKET,
  SET_QUERY,
} from '../actions/sockets';

const initialState = {
  socket: {},
  queries: []
};

export default function basketItems(state = initialState, action) {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socket: action.payload };
    case SET_QUERY:
      return { ...state, queries: action.payload };
    default:
      return state;
  }
}
