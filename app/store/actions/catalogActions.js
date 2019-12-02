export const TOGGLE_GENDER = "TOGGLE_GENDER";
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

require("dotenv").config();

const SERVER = process.env.SERVER_ADDRESS || "192.168.1.231";
const PORT = process.env.SERVER_PORT || "3123";

export const toggleGender = gender => ({
  type: TOGGLE_GENDER,
  gender
});

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST
});

export const fetchCategoriesSucces = data => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories: data
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  error
});

export const fetchCategories = parentId => dispatch => {
  dispatch(fetchCategoriesRequest());
  return fetch(`http://${SERVER}:${PORT}/categories/${parentId}`)
    .then(response => response.json())
    .then(data => {
      if (data.type === "Success") {
        dispatch(fetchCategoriesSucces(data.data));
      }
    })
    .catch(error => dispatch(fetchCategoriesFailure(error)));
};
