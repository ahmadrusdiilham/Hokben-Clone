import {
  FOODS_FETCH_SUCCESS,
  CATEGORIES_FETCH_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  INGREDIENTS_FETCH_SUCCESS,
  FOOD_FETCH_SUCCESS,
  CATEGORY_DETAIL_SUCCESS,
} from "./actionType";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const foodsFetchSuccess = (payload) => {
  return { type: FOODS_FETCH_SUCCESS, payload };
};

export const categoriesFetchSuccess = (payload) => {
  return { type: CATEGORIES_FETCH_SUCCESS, payload };
};

export const categoriesAddSuccess = (payload) => {
  return { type: ADD_CATEGORY_SUCCESS, payload };
};

export const ingredientsFetchSuccess = (payload) => {
  return { type: INGREDIENTS_FETCH_SUCCESS, payload };
};

export const foodDetailFetchSuccess = (payload) => {
  return { type: FOOD_FETCH_SUCCESS, payload };
};

export const categoryDetailFetchSuccess = (payload) => {
  return { type: CATEGORY_DETAIL_SUCCESS, payload };
};

function successMessage(message) {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    timer: 1500,
  });
}

function errorMessage(message) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

const baseUrl = "https://react.ahmadrusdiilham.com";

export const handleLogin = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      localStorage.access_token = data.access_token;
      await successMessage("Success Login");
    } catch (err) {
      await errorMessage(err.message);
      throw err;
    }
  };
};

export const fetchFoods = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/items");
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(foodsFetchSuccess(data));
    } catch (err) {
      throw err;
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/categories");
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      dispatch(categoriesFetchSuccess(data));
    } catch (err) {
      throw err;
    }
  };
};

export const fetchDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/items/" + id);
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(foodDetailFetchSuccess(data));
    } catch (err) {
      throw err;
    }
  };
};

export const detailCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/categories/" + id);
      const resData = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(categoryDetailFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
};

export const deleteFood = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/items/" + id, {
        method: "DELETE",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      await dispatch(fetchFoods());
      successMessage("Success Deleted Food");
    } catch (err) {
      throw err;
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/categories/" + id, {
        method: "DELETE",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      await dispatch(fetchCategories());
      successMessage("Success Deleted Category");
    } catch (err) {
      throw err;
    }
  };
};

export const addCategory = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/categories", {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },

        body: JSON.stringify(value),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      await dispatch(categoriesAddSuccess(resData));
      await successMessage("Success Add Category");
    } catch (err) {
      await errorMessage(err.message);
      throw err;
    }
  };
};

export const addFood = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/items", {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      await successMessage("Success Add Food");
    } catch (err) {
      await errorMessage(err.message);
      throw err;
    }
  };
};

export const editFood = (value, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/items/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(value),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      successMessage(resData.message);
    } catch (err) {
      errorMessage(err.message);
      throw err;
    }
  };
};

export const editCategory = (value, id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/categories/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(value),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      await dispatch(fetchCategories());
      successMessage(resData.message);
    } catch (err) {
      errorMessage(err.message);
      throw err;
    }
  };
};

export const registerAdmin = (value) => {
  return async () => {
    try {
      const response = await fetch(baseUrl + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const resData = await response.json();
      if (!response.ok) {
        throw resData;
      }
      successMessage(resData.message);
    } catch (err) {
      errorMessage(err.message);
      throw err;
    }
  };
};
