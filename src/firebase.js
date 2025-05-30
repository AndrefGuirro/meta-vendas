import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPAEDE92I7LEUAtLEde9DXMZg4P1fo9AE",
  authDomain: "meta-venda-68552.firebaseapp.com",
  projectId: "meta-venda-68552",
  storageBucket: "meta-venda-68552.appspot.com",
  messagingSenderId: "649312547070",
  appId: "1:649312547070:web:e78f4abca375c6d50f35af"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
