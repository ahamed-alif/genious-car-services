// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgwPi3HLAUYIBJzDAqSn666bZQybm0EVw",
  authDomain: "genious-car-survices.firebaseapp.com",
  projectId: "genious-car-survices",
  storageBucket: "genious-car-survices.appspot.com",
  messagingSenderId: "1006950557347",
  appId: "1:1006950557347:web:7cd62e5fa3999c5009c116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;