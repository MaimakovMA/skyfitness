import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy048lzeOUxajuw7dvSj3InfXNa8Y6D_Y",
  authDomain: "auth-exmple-d8c4f.firebaseapp.com",
  projectId: "auth-exmple-d8c4f",
  storageBucket: "auth-exmple-d8c4f.appspot.com",
  messagingSenderId: 970634278257,
  appId: "1:970634278257:web:3ee204d063f414f30432d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app

