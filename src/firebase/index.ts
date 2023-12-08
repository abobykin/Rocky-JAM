import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { LocalStorage } from "quasar";

const firebaseConfig = {
  apiKey: "AIzaSyBmMotKngZFPeaJEHTHz-FkdB5QmHeEopY",
  authDomain: "rocky-jam.firebaseapp.com",
  projectId: "rocky-jam",
  storageBucket: "rocky-jam.appspot.com",
  messagingSenderId: "932321970977",
  appId: "1:932321970977:web:e75b1a770f566b3c71cc60",
  measurementId: "G-1MCNN00F23",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set("user", user);
  } else {
    LocalStorage.remove("user");
  }
});
