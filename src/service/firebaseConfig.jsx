// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "ai-tinerary-fe162.firebaseapp.com",
  projectId: "ai-tinerary-fe162",
  storageBucket: "ai-tinerary-fe162.firebasestorage.app",
  messagingSenderId: "199046596609",
  appId: "1:199046596609:web:38e1796a501a4de2f6d800",
  measurementId: "G-EDDMQ3HLBW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
