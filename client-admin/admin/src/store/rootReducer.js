import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import foodReducer from "./foodReducer";
import categoryReducer from "./categoryReducer";
import ingredientsReducer from "./ingredientReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  foodReducer,
  categoryReducer,
  ingredientsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
