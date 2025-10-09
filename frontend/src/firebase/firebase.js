// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbzZESxwGsoP9SwgS9r5OMu5dSRJ8IlRk",
  authDomain: "vocord-login-auth.firebaseapp.com",
  projectId: "vocord-login-auth",
  storageBucket: "vocord-login-auth.firebasestorage.app",
  messagingSenderId: "177685755017",
  appId: "1:177685755017:web:d9594aa74829b77f980258"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
