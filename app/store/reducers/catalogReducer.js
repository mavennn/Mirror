import {
  TOGGLE_GENDER,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/catalogActions";

const initialState = {
  gender: "",
  isChild: "",
  categories: [],
  isFetching: false,
  error: null,
};
const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GENDER:
      return { ...state, gender: action.gender, categories: [] };
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, isFetching: false, categories: action.categories };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default catalogReducer;
