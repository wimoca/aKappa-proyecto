// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  // apiKey: "AIzaSyBJHmqOLGkCEdzuxlb8pgBJE40WSTmt-V8",
  // authDomain: "test-proy-f30c4.firebaseapp.com",
  // databaseURL: "https://test-proy-f30c4-default-rtdb.firebaseio.com",
  // projectId: "test-proy-f30c4",
  // storageBucket: "test-proy-f30c4.appspot.com",
  // messagingSenderId: "612612989598",
  // appId: "1:612612989598:web:701e5ff87a253d24e6d18f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
