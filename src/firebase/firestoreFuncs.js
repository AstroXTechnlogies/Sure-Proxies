import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, auth, googleProvider } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const NEWSLETTER_COLLECTION = "newsletters";
const USER_COLLECTION = "users";

export const addNewsletterEmail = async ({ email }) => {
  try {
    await addDoc(collection(db, NEWSLETTER_COLLECTION), {
      email,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const signUpWithEmail = async ({ email, psw }) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, psw);
    const userRef = doc(db, USER_COLLECTION, cred.user.uid);

    // 👇 Write the document
    await setDoc(userRef, {
      email: cred.user.email,
      uid: cred.user.uid,
      createdAt: new Date(),
    });
    return true;
  } catch (error) {
    alert("Something went wrong please try again");
    return false;
  }
};

export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    // The signed-in user info
    const user = result.user;
    const userRef = doc(db, USER_COLLECTION, user.uid);

    // 👇 Write the document
    await setDoc(userRef, {
      email: user.email,
      uid: user.uid,
      createdAt: new Date(),
    });

    return true;
  } catch (error) {
    console.error(error);
    if (
      error.code === "auth/popup-blocked" ||
      error.code === "auth/popup-closed-by-user"
    ) {
      alert(
        "Popup closed before completing sign in. Please sign Up using Email & Password"
      );
    }

    return false;
  }
};

export const signInWithEmail = async ({ email, psw }) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, psw);

    if (cred.user.uid) return true;
    else return false;
  } catch (error) {
    alert("Something went wrong please try again");

    return false;
  }
};

export const signInWithGoogle = async () => {
  try {
    const cred = await signInWithPopup(auth, googleProvider);

    if (cred.user.uid) return true;
    else return false;
  } catch (error) {
    if (
      error.code === "auth/popup-blocked" ||
      error.code === "auth/popup-closed-by-user"
    ) {
      alert(
        "Popup closed before completing sign in. Please sign Up using Email & Password"
      );
    }
    return false;
  }
};
