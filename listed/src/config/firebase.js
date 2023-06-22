// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEhwud6ZwhCjIz3u8sAvB3-Wh8Dy978Y8",
  authDomain: "listed-project-c72c3.firebaseapp.com",
  projectId: "listed-project-c72c3",
  storageBucket: "listed-project-c72c3.appspot.com",
  messagingSenderId: "98891530471",
  appId: "1:98891530471:web:78eb47e4605dd390e52242",
  measurementId: "G-RBYHLKQTQW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth =  getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();