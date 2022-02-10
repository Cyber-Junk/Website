import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA1BzCM6MY32MyjaEHl-7vCuNYnxKELJcU",
  authDomain: "cyberjunk-d03bb.firebaseapp.com",
  projectId: "cyberjunk-d03bb",
  storageBucket: "cyberjunk-d03bb.appspot.com",
  messagingSenderId: "648110511778",
  appId: "1:648110511778:web:433d7b1604da7059d5e9fb",
  measurementId: "G-FQ2K1TSJTT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;