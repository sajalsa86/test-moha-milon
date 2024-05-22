// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARhG9yLv_WeinDhIgyt1cHIwOc6VVA5pk",
  authDomain: "test-moha-milon.firebaseapp.com",
  projectId: "test-moha-milon",
  storageBucket: "test-moha-milon.appspot.com",
  messagingSenderId: "516606842716",
  appId: "1:516606842716:web:66433998def52dd2b51399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
