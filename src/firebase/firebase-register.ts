import { auth } from "./index.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Loading, Notify } from "quasar";
import { UserData } from "../types/userData";

const register = async (data: UserData) => {
  try {
    Loading.show();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    await updateProfile(userCredential.user, {
      displayName: data.first_name + " " + data.last_name,
    });

    Loading.hide();
    return userCredential.user;
  } catch (err) {
    Loading.hide();
    Notify.create({
      type: "negative",
      message: err as string,
    });
    throw err;
  }
};

export default register;
