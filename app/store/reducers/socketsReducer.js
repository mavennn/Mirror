import {
  SET_SOCKET,
  GET_CONSULTANT,
<<<<<<< HEAD
  CANCEL_CONSULTANT
=======
  CANCEL_CONSULTANT,
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
} from '../actions/socketsActions';

const initialState = {
  socket: {},
  isConsultantCalled: false,
  query: {
    room: '',
<<<<<<< HEAD
    time: ''
  }
=======
    time: '',
  },
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
};

const socketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socket: action.payload };
    case GET_CONSULTANT:
<<<<<<< HEAD
      return { ...state, isConsultantCalled: true };
    case CANCEL_CONSULTANT:
      return { ...state, isConsultantCalled: false };
=======
      return {...state, isConsultantCalled: true };
    case CANCEL_CONSULTANT:
      return {...state, isConsultantCalled: false };
>>>>>>> c6baf4d34dec18512207c6203b6ebb0e3e1f986a
    default:
      return state;
  }
};

export default socketsReducer;
