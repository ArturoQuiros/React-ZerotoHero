import { signInWithGoogle } from "../../firebase";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    //start the login process
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    //login failed
    if (!result.ok) return dispatch(logout(result.errorMessage));
    //login success
    dispatch(login(result));
  };
};
