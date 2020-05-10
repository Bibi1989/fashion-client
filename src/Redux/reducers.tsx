import { combineReducers } from "redux";
import { reducer } from "../ProductReducer/reducer";

const appReducer = combineReducers({
  products: reducer,
});

export type AppState = ReturnType<typeof combineReducers>;

export default appReducer;
