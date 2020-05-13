import { REGISTER, LOGIN } from "./types";
import { RegisterInterface } from "./interface";

export const RegisterAction = (user: RegisterInterface) => ({
  type: REGISTER,
  payload: user,
});
export const LoginAction = (user: RegisterInterface) => ({
  type: LOGIN,
  payload: user,
});
