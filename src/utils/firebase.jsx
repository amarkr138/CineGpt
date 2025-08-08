// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRaevgvNz5qvsS5ra1q27dHCpv0vR5Vas",
  authDomain: "netflixgpt-ee771.firebaseapp.com",
  projectId: "netflixgpt-ee771",
  storageBucket: "netflixgpt-ee771.firebasestorage.app",
  messagingSenderId: "1007242319852",
  appId: "1:1007242319852:web:166aedd933b5dc74b6d2c9",
  measurementId: "G-Y04EQF3V7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();