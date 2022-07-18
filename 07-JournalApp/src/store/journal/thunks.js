import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";

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

export const startLoadingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new console.error("UID not defined");

    //getting all the notes from firebase
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startUpdateNote = () => {
  return async (dispatch, getState) => {
    //saving is turned on
    dispatch(setSaving());
    //update in firebase
    const { uid } = getState().auth;
    if (!uid) throw new console.error("UID not defined");

    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });
    //update in the notes [] state
    dispatch(updateNote(note));
  };
};
