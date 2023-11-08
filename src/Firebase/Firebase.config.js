// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTW2TclMnfe8uPy7D5rEDBfAP84k676KA",
  authDomain: "fashion-and-apparel.firebaseapp.com",
  projectId: "fashion-and-apparel",
  storageBucket: "fashion-and-apparel.appspot.com",
  messagingSenderId: "613439269229",
  appId: "1:613439269229:web:abadc507cd3a30097c9264"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;