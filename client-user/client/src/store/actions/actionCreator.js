import {
  CATEGORIES_FETCH_SUCCESS,
  FOODS_FETCH_SUCCESS,
  FOOD_FETCH_SUCCESS,
  LANDINGPAGE_FETCH_SUCCESS,
} from "./actionType";

export const foodsFetchSuccess = (payload) => {
  return { type: FOODS_FETCH_SUCCESS, payload };
};
export const categoriesFetchSuccess = (payload) => {
  return { type: CATEGORIES_FETCH_SUCCESS, payload };
};
export const foodFetchSuccess = (payload) => {
  return { type: FOOD_FETCH_SUCCESS, payload };
};
export const langdinPageFetchSuccess = (payload) => {
  return { type: LANDINGPAGE_FETCH_SUCCESS, payload };
};
const baseUrl = "https://react.ahmadrusdiilham.com";

export const fetchFoods = (query) => {
  let url = "https://react.ahmadrusdiilham.com/pub/items";
  if (query) {
    url += `?CategoryId=${query}`;
  }
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      await dispatch(foodsFetchSuccess(data));
    } catch (err) {
      throw err;
    }
  };
};

export const fetchDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/pub/items/" + id);
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(foodFetchSuccess(data));
    } catch (err) {
      throw err;
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/pub/categories");
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      await dispatch(categoriesFetchSuccess(data));
    } catch (err) {}
  };
};

export const fetchLandingPage = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/pub/landingPage");
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(langdinPageFetchSuccess(data));
    } catch (err) {
      throw err;
    }
  };
};
