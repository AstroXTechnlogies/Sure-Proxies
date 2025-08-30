// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPqUf1Nyv8fbpMp7x_t2dh9_ZMCNnFI-k",
  authDomain: "sure-proxies2.firebaseapp.com",
  projectId: "sure-proxies2",
  storageBucket: "sure-proxies2.firebasestorage.app",
  messagingSenderId: "279229346922",
  appId: "1:279229346922:web:96f2e48296d7333d4e8613",
  measurementId: "G-TVFPTRSVY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// optional: force account chooser every time
googleProvider.setCustomParameters({ prompt: "select_account" });
