import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeT4cUDqixolZdY4_8hstFsmo4gbuZu1U",
  authDomain: "clone-d8773.firebaseapp.com",
  projectId: "clone-d8773",
  storageBucket: "clone-d8773.appspot.com",
  messagingSenderId: "398201401473",
  appId: "1:398201401473:web:26fd82a90491ddddc59d80",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
