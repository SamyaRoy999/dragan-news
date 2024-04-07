// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhpUk3xUX1eFzpyXaIWboivn6nF5Uheb8",
  authDomain: "dragon-news-auth-88337.firebaseapp.com",
  projectId: "dragon-news-auth-88337",
  storageBucket: "dragon-news-auth-88337.appspot.com",
  messagingSenderId: "838746084092",
  appId: "1:838746084092:web:3c0fb85f8853d4a4783d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth