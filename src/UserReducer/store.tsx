import axios from "axios";
import { RegisterInterface, LoginInterface } from "./interface";
import { RegisterAction, LoginAction } from "./action";
import { ERROR, ERROR_LOGIN, LOADING } from "./types";
// const AUTH_URL = "http://localhost:4000/users";
const AUTH_URL = "https://ere-place-api.herokuapp.com/users";

export const RegisterUser = async (
  dispatch: any,
  user: RegisterInterface,
  history: any
) => {
  try {
    dispatch({ type: LOADING, payload: true });
    const response = await axios.post(`${AUTH_URL}/register`, user, {
      headers: {
        "Content-Type": "Application/json",
      },
    });
    history.push("/");
    dispatch({ type: LOADING, payload: false });
    dispatch(RegisterAction(response.data.data));
  } catch (error) {
    dispatch({ type: LOADING, payload: false });
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const LoginUser = async (
  dispatch: any,
  user: LoginInterface,
  history: any
) => {
  try {
    dispatch({ type: LOADING, payload: true });
    const response = await axios.post(`${AUTH_URL}/login`, user, {
      headers: {
        "Content-Type": "Application/json",
      },
    });
    sessionStorage.setItem("ere_token", JSON.stringify(response.data.token));
    sessionStorage.setItem("ere_user", JSON.stringify(response.data.data));
    history.push("/");
    dispatch({ type: LOADING, payload: false });
    dispatch(LoginAction(response.data.data));
  } catch (error) {
    dispatch({ type: LOADING, payload: false });
    dispatch({ type: ERROR_LOGIN, payload: error.response.data });
  }
};
