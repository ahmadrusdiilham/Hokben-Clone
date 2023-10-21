import { FOODS_FETCH_SUCCESS, FOOD_FETCH_SUCCESS } from "./actions/actionType";

const initialState = {
  foods: [],
  food: null,
};

function foodReducer(state = initialState, action) {
  switch (action.type) {
    case FOODS_FETCH_SUCCESS:
      return { ...state, foods: action.payload };
    case FOOD_FETCH_SUCCESS:
      return { ...state, food: action.payload };
    default:
      return state;
  }
}
export default foodReducer;
