import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2pBvQXQKL28mXYIC8YPEVl3PV1I8EhYs",
  authDomain: "godsbanen-1c465.firebaseapp.com",
  projectId: "godsbanen-1c465",
  storageBucket: "godsbanen-1c465.firebasestorage.app",
  messagingSenderId: "113390897838",
  appId: "1:113390897838:web:22ecc19e9599ace3bd3b3f",
  measurementId: "G-BY0W2FBTG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
