import {
  ADD_CATEGORY_SUCCESS,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORY_DETAIL_SUCCESS,
} from "./actions/actionType";

const initialState = {
  categories: [],
  category: null,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return { ...state, categories: action.payload };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case CATEGORY_DETAIL_SUCCESS:
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
export default categoryReducer;
