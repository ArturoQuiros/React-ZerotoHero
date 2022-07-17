import {
  signInWithGoogle,
  LogingUserWithEmailPassword,
  registerUserWithEmailPassword,
  logoutFirebase,
} from "../../firebase";
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

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    //start the checking
    dispatch(checkingCredentials());
    //start the login process
    const { ok, errorMessage, photoURL, uid } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    //login failed
    if (!ok) return dispatch(logout({ errorMessage }));
    //login success
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLogingUserWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    //start the checking
    dispatch(checkingCredentials());
    //start the login process
    const { ok, errorMessage, photoURL, displayName, uid } =
      await LogingUserWithEmailPassword({
        email,
        password,
      });
    //login failed
    if (!ok) return dispatch(logout({ errorMessage }));
    //login success
    dispatch(login({ uid, email, displayName, photoURL }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    //logout in Frebase
    await logoutFirebase();
    //logout in redux
    dispatch(logout());
  };
};
