import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./reducers";

const loggerMiddleware = createLogger();
const enhancers: any = [];
const initialState = {};

const middleware: any = [thunkMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

if (process.env.NODE_ENV === "development") {
  middleware.push(loggerMiddleware);
}

if (process.env.NODE_ENV === "development") {
  const devToolsExtension: any =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composeEnhancers = compose<any>(
  applyMiddleware(...middleware),
  ...enhancers
);

const store: any = createStore(appReducer, initialState, composeEnhancers);

export default store;
