import { FirebaseDB } from "../firebase";
import { doc, getDocs, collection } from "firebase/firestore/lite";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new console.error("UID not defined");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  console.log(notes);
  return notes;
};
