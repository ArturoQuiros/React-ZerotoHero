import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //getting the user id on the state
    const { uid } = getState().auth;

    //creating the new note
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const res = await setDoc(newDoc, newNote);

    //dispatch
  };
};
