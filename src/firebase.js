// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCONhoku6Al2oWwZzGiNeE6LcCAc2Jaojk",
  authDomain: "bookstore-99247.firebaseapp.com",
  projectId: "bookstore-99247",
  storageBucket: "bookstore-99247.appspot.com",
  messagingSenderId: "153497485513",
  appId: "1:153497485513:web:1ef4fc618daad58f09cd18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {auth};