// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAxHU_y_UXSMj99SC6e-gO0oq-TRWCT9E",
  authDomain: "tezeract-task.firebaseapp.com",
  projectId: "tezeract-task",
  storageBucket: "tezeract-task.appspot.com",
  messagingSenderId: "272836763056",
  appId: "1:272836763056:web:8df4735c1f9aa253e3ca75",
  measurementId: "G-35VLE8X5YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);