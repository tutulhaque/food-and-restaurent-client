// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOfRqa4vaOzucHxsaSOPJ3b4SQE-bjjb8",
  authDomain: "food-and-restaurant-f7f9f.firebaseapp.com",
  projectId: "food-and-restaurant-f7f9f",
  storageBucket: "food-and-restaurant-f7f9f.appspot.com",
  messagingSenderId: "6603452212",
  appId: "1:6603452212:web:19c11faf70027bec38bf61"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;