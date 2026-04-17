import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ1_BUAVK_h8TYp3PHkWIrd0fDr48WFMc",
  authDomain: "as-2-karenbisson.firebaseapp.com",
  projectId: "as-2-karenbisson",
  storageBucket: "as-2-karenbisson.firebasestorage.app",
  messagingSenderId: "526722292343",
  appId: "1:526722292343:web:44231d102adaf52ffc8472"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);