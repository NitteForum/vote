// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSdumdaUuL1H0TE0s8gi0Qdw6kODn9Mts",
  authDomain: "vote-f15a0.firebaseapp.com",
  projectId: "vote-f15a0",
  storageBucket: "vote-f15a0.firebasestorage.app",
  messagingSenderId: "910602739894",
  appId: "1:910602739894:web:b9736cc91726b123828617",
  measurementId: "G-220EB0FLFQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
