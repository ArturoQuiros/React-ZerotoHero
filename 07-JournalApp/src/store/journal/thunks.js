import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    //saving turning on
    dispatch(savingNewNote());

    //getting the user id on the state
    const { uid } = getState().auth;

    //creating the new note
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    //storing the note in firebase
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const res = await setDoc(newDoc, newNote);

    //setting the note id with the firebase id
    newNote.id = newDoc.id;
    //storing the note into the state
    dispatch(addNewEmptyNote(newNote));
    //activating the new Note
    dispatch(setActiveNote(newNote));
  };
};
