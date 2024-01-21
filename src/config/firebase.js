// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgdgwrKPYzgb4rgm705dEWl8Nbnh1Dq7A",
  authDomain: "vite-contact-e5b7a.firebaseapp.com",
  projectId: "vite-contact-e5b7a",
  storageBucket: "vite-contact-e5b7a.appspot.com",
  messagingSenderId: "588414478609",
  appId: "1:588414478609:web:d36263e39b2dae36a884b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
