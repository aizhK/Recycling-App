import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD3kf8HgqN-SJJPJmB6dx3CCtA006x7zx4",
    authDomain: "recyclerush-10293847.firebaseapp.com",
    projectId: "recyclerush-10293847",
    storageBucket: "recyclerush-10293847.appspot.com",
    messagingSenderId: "961922787378",
    appId: "1:961922787378:web:43aa114b72aad76bdc742b",
    measurementId: "G-RPENBL162P"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };