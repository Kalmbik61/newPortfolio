import { combineReducers } from "redux";
import reducer from "./reducer";
import langReducer from "./langReducer";

export default combineReducers({
  reducer,
  langReducer,
});
