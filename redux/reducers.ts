import { combineReducers } from "redux";
import graphsSlice from "./slicers/graphsSlice";

const rootReducer = combineReducers({
  graphsSlice,
});

export default rootReducer;
