// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import{getAuth} from 'firebase/auth';
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQglEg6wibTeVYaofOEFGxZ6_u5XiBKQ8",
  authDomain: "react-b80db.firebaseapp.com",
  projectId: "react-b80db",
  storageBucket: "react-b80db.firebasestorage.app",
  messagingSenderId: "505305524074",
  appId: "1:505305524074:web:f2f44cb46a060566b66713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider