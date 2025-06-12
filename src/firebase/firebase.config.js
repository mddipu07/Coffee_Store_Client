
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkMhEMcLWguPsPoHsLv1oihJgFcWtfaOw",
  authDomain: "coffee-store-app-cba8d.firebaseapp.com",
  projectId: "coffee-store-app-cba8d",
  storageBucket: "coffee-store-app-cba8d.firebasestorage.app",
  messagingSenderId: "766105432527",
  appId: "1:766105432527:web:8290b46166c7464a75a2ba"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)