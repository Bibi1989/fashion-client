import { REGISTER, LOGIN, LOADING, ERROR, ERROR_LOGIN } from "./types";
import { ActionInterface } from "./interface";

const initialState = {
  login: null,
  register: null,
  errors: null,
  errors_login: null,
  loading: false,
};

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errors_login: action.payload,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
