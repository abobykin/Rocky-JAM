import { db } from "../firebase/index";
import {
  getDocs,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// FUNCTIONS DRAFT for compositions' CRUD

// GET DOCS
export const getCompositions = async () => {
  try {
    const q = collection(db, "compositions");
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs;
    const compositions = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return compositions;
  } catch (error) {
    console.error("An error occurred while getting compositions:", error);
    throw error;
  }
};

// GET DOC BY ID

export const getCompositionById = async (compositionId: string) => {
  try {
    const q = doc(db, "compositions", compositionId);
    const docSnapshot = await getDoc(q);
    if (docSnapshot.exists()) {
      const compositionData = { ...docSnapshot.data(), id: docSnapshot.id };
      return compositionData;
    } else {
      throw new Error("Composition not found");
    }
  } catch (error) {
    console.error("An error occurred while getting composition by ID:", error);
    throw error;
  }
};

// REMOVE DOC
export const deleteComposition = async () => {
  try {
    await deleteDoc(doc(db, "/compositions", "vEmBLwFJ6ejcgpn0y2AO"));
  } catch (error) {
    console.error("An error occurred while deleting composition:", error);
  }
};

// UPDATE DOC
export const updateComposition = async () => {
  try {
    await updateDoc(doc(db, "/compositions", "vEmBLwFJ6ejcgpn0y2AO"), {
      key: "Am",
      name: "Storm",
      // name: "Storm",
      parts: ["LE0bGpZassTeDU4kpY0t"],
      tempo: 74,
    });
  } catch (error) {
    console.error("An error occurred while updating composition:", error);
  }
};

// ADD DOC
export const addComposition = async () => {
  try {
    await addDoc(collection(db, "/compositions"), {
      key: "Am",
      name: "Storm",
      // name: "Storm",
      parts: ["LE0bGpZassTeDU4kpY0t"],
      tempo: 74,
    });
  } catch (error) {
    console.error("An error occurred while adding composition:", error);
  }
};
