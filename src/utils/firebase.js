import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUT35-7SLhpYWEa3F-m6bmewNzA0zu1Gc",
  authDomain: "joshi-durgesh-netflix-gpt.firebaseapp.com",
  projectId: "joshi-durgesh-netflix-gpt",
  storageBucket: "joshi-durgesh-netflix-gpt.appspot.com",
  messagingSenderId: "719151048009",
  appId: "1:719151048009:web:a1a89a36def0892cbfe698",
  measurementId: "G-S8SE61BYWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
