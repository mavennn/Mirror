import {
    SET_SOCKET,
} from '../actions/sockets';

const initialState = {
    socket: {}
};

export default function basketItems(state = initialState, action) {
    switch (action.type) {
        case SET_SOCKET:
            return { ...state, socket: action.payload}
        default:
            return state;
    }
}
