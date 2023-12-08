import { auth } from "./index.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Loading, Notify } from "quasar";
import { UserData } from "../types/userData";
const login = (data: UserData) => {
  return new Promise((resolve, reject) => {
    Loading.show();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        Loading.hide();
        resolve(userCredential.user);
      })
      .catch((err: ErrorEvent) => {
        Loading.hide();
        Notify.create({
          type: "negative",
          message: err.message,
        });
        reject(err.message);
      });
  });
};
export default login;
