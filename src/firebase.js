// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_IM7NWys5i2nFWummeoAp6Vij4-xnnsw",
  authDomain: "chat-app-d03a4.firebaseapp.com",
  projectId: "chat-app-d03a4",
  storageBucket: "chat-app-d03a4.appspot.com",
  messagingSenderId: "965464190016",
  appId: "1:965464190016:web:da525a6cdfa2b5d74e83a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)