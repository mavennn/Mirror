import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET
} from '../actions/basketThingsActions';

const initialState = {
  basketThings: []
};

const basketThingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketThings: state.basketThings.concat(action.payload)
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketThings: state.basketThings
          .slice(0, action.payload)
          .concat(state.basketThings.slice(action.payload + 1))
      };
    case CLEAR_BASKET:
      return { ...state, basketThings: action.payload };
    default:
      return state;
  }
};

export default basketThingsReducer;
