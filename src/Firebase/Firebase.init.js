// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWf_sF0RWmnecV1vrEnfrrT_yBf19iEwA",
  authDomain: "gym-website-auth.firebaseapp.com",
  projectId: "gym-website-auth",
  storageBucket: "gym-website-auth.appspot.com",
  messagingSenderId: "1044687569429",
  appId: "1:1044687569429:web:bb634022a70e91a18b041c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
