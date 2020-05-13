import { combineReducers } from "redux";
import { reducer } from "../ProductReducer/reducer";
import UserReducer from "../UserReducer/UserReducer";

const appReducer = combineReducers({
  products: reducer,
  users: UserReducer,
});

export type AppState = ReturnType<typeof combineReducers>;

export default appReducer;
