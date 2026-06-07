// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-e4220.firebaseapp.com",
  projectId: "authexamnotes-e4220",
  storageBucket: "authexamnotes-e4220.firebasestorage.app",
  messagingSenderId: "112258361127",
  appId: "1:112258361127:web:856080ff2b9a9e18ed6b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export {auth,provider}