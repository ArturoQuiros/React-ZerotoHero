import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    //create user on firebase
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    //get the result
    const { uid, photoURL } = result.user;

    //adding the DisplayName
    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    });
    //result ok
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    //result not ok
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const LogingUserWithEmailPassword = async ({ email, password }) => {
  try {
    //login user on firebase
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    //get the result
    const { uid, photoURL, displayName } = result.user;

    //result ok
    return {
      ok: true,
      uid,
      displayName,
      photoURL,
      email,
    };
  } catch (error) {
    //result not ok
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
