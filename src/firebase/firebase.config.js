// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDhXT8_sYy4xWoE2u_AL2bvqE8y7y8hAI",
  authDomain: "react-news-auth-31686.firebaseapp.com",
  projectId: "react-news-auth-31686",
  storageBucket: "react-news-auth-31686.appspot.com",
  messagingSenderId: "42590112879",
  appId: "1:42590112879:web:5157130e569acae9fd919a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app