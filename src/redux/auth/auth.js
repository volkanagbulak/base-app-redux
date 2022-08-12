import AuthService from "../../services/AuthService";
import { loggingOut, loginFailure, loginStart, loginSuccess, registerFailure, registerSuccess } from "./authSlice";

export const register = async (dispatch, user) => {
  try {
    const res = await AuthService.register(user.firstName, user.lastName, user.email, user.password);
    dispatch(registerSuccess(res));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await AuthService.login(user.email, user.password);
    dispatch(loginSuccess(res));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  await dispatch(loggingOut());
};
