// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7f177.firebaseapp.com",
  projectId: "mern-auth-7f177",
  storageBucket: "mern-auth-7f177.firebasestorage.app",
  messagingSenderId: "612778856786",
  appId: "1:612778856786:web:22814d3c284c7b67bd6a8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);