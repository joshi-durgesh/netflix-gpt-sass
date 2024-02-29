import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE46HBt6XrU9B_JzJ88Iqbh2ya1PkAmUc",
  authDomain: "durgesh-joshi-netflix-gpt.firebaseapp.com",
  projectId: "durgesh-joshi-netflix-gpt",
  storageBucket: "durgesh-joshi-netflix-gpt.appspot.com",
  messagingSenderId: "570765607829",
  appId: "1:570765607829:web:46a5158eec34e15b1dec9c",
  measurementId: "G-X1YGYY5SZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
