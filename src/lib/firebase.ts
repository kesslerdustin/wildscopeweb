// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSe-zyMUK8iSWtUrTQNoy9ckRpEqpKypg",
  authDomain: "outdoor-bible.firebaseapp.com",
  projectId: "outdoor-bible",
  storageBucket: "outdoor-bible.appspot.com",
  messagingSenderId: "274518869842",
  appId: "1:274518869842:web:5b2652b3126d95cb131c8b",
  measurementId: "G-MP85CVZEE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app; 