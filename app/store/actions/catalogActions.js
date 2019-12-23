export const TOGGLE_GENDER = 'TOGGLE_GENDER';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_THINGS_REQUEST = 'FETCH_THINGS_REQUEST';
export const FETCH_THINGS_SUCCESS = 'FETCH_THINGS_SUCCESS';
export const FETCH_THINGS_FAILURE = 'FETCH_THINGS_FAILURE';

require('dotenv').config();

const SERVER = process.env.SERVER_ADDRESS || '192.168.1.231';
const PORT = process.env.SERVER_PORT || '3123';

export const toggleStatus = (status) => ({
  type: TOGGLE_STATUS,
  status,
});

export const toggleGender = (gender) => (dispatch) => {
  dispatch({ type: 'RESET_FILTER'});
  dispatch({
    type: TOGGLE_GENDER,
    gender,
  })
};

// <------------------ получение категорий ------------------->

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSucces = (data) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories: data,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  error,
});

export const fetchCategories = (parentId) => (dispatch) => {
  dispatch(fetchCategoriesRequest());
  return fetch(`http://${SERVER}:${PORT}/category/${parentId}/subcategories`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length !== 0) {
        dispatch(fetchCategoriesSucces(data));
      }
    })
    .catch((error) => dispatch(fetchCategoriesFailure(error)));
};

// <------------------ получение Шмоток ------------------->

export const fetchThingsRequest = () => ({
  type: FETCH_THINGS_REQUEST,
});

export const fetchThingsSuccess = (things) => ({
  type: FETCH_THINGS_SUCCESS,
  things,
});

export const fetchThingsFailure = (error) => ({
  type: FETCH_THINGS_FAILURE,
  error,
});

export const fetchThings = (categoryId) => (dispatch) => {
  dispatch(fetchThingsRequest());
  return fetch(`http:${SERVER}:${PORT}/category/${categoryId}/things`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length !== 0) {
        dispatch(fetchThingsSuccess(data));
      } else {
        alert('Вещей данной категории нет');
      }
    })
    .catch((error) => dispatch(fetchThingsFailure(error)));
};