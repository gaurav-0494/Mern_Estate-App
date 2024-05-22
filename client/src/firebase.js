// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7cbae.firebaseapp.com",
  projectId: "mern-estate-7cbae",
  storageBucket: "mern-estate-7cbae.appspot.com",
  messagingSenderId: "129491453608",
  appId: "1:129491453608:web:a1130cc0ff4285bc7de49d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);