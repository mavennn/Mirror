import * as actions from '../actions/сurrentThingActions';

const initialState = {
  barcode: '',
  ware: '',
  name: '',
  price: 0,
  brand: '',
  size: '',
  color: '',
  pictures: [],
  availableSizes: [],
  availableColors: [],
  history: [],
  isFetching: false,
  error: '',
  recs: []
};

const CurrentThingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_THING_INFO_REQUEST:
      return { ...state, isFetching: true };
    case actions.FETCH_THING_INFO_SUCCESS:
      return { ...state, ...action.payload, isFetching: false };
    case actions.FETCH_THING_INFO_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case actions.CHANGE_COLOR:
      return { ...state, color: action.payload };
    case actions.CHANGE_SIZE:
      return { ...state, size: action.payload };
    case actions.ADD_TO_HISTORY:
      return { ...state, history: state.history.concat(action.payload) };
    case actions.SET_TO_DEFAULT:
      return initialState;
    default:
      return state;
  }
};

export default CurrentThingReducer;
