// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDndzaRpikBMKN1n7X2_C0JlzhQdqEuyAI",
  authDomain: "pizza-planet-v3-3cc0e.firebaseapp.com",
  projectId: "pizza-planet-v3-3cc0e",
  storageBucket: "pizza-planet-v3-3cc0e.firebasestorage.app",
  messagingSenderId: "689193396141",
  appId: "1:689193396141:web:bcd66ddc3f281410a2e324"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const dbPizzasRef = collection(db, "pizzas");
export const dbOrdersRef = collection(db, "orders");