import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEhwud6ZwhCjIz3u8sAvB3-Wh8Dy978Y8",
  authDomain: "listed-project-c72c3.firebaseapp.com",
  projectId: "listed-project-c72c3",
  storageBucket: "listed-project-c72c3.appspot.com",
  messagingSenderId: "98891530471",
  appId: "1:98891530471:web:78eb47e4605dd390e52242",
  measurementId: "G-RBYHLKQTQW",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth =  getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
