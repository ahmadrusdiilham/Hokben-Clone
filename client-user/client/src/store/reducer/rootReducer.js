import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import foodReducer from "./rootFood";
import categoryReducer from "./rootCategory";
const rootReducer = combineReducers({
  foodReducer,
  categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
