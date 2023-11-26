import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc} from "firebase/firestore";

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
const db = getFirestore(app);
const usersCollection = collection(db, "users");

export {app, db, usersCollection, addDoc, getDocs, doc, updateDoc}