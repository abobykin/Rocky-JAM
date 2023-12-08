import { auth } from "./index.js";
import { signOut } from "firebase/auth";
import { Loading, Notify } from "quasar";

const signOutUser = () => {
  Loading.show();
  return signOut(auth)
    .then(() => {
      Loading.hide();
    })
    .catch((err: ErrorEvent) => {
      Loading.hide();
      Notify.create({
        type: "negative",
        message: err.message,
      });
      throw err.message;
    });
};
export default signOutUser;
