import { combineReducers } from "redux";
// import productReducer from "../components/productReducer/reducer";

const appReducer = combineReducers({
  //   productReducer,
});

export type AppState = ReturnType<typeof combineReducers>;

export default appReducer;
