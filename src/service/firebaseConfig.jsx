// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmCqBfIAhPqCU-etd_NnkeqpO9FwPuQb4",
  authDomain: "ai-trip-planner-60fc2.firebaseapp.com",
  projectId: "ai-trip-planner-60fc2",
  storageBucket: "ai-trip-planner-60fc2.appspot.com",
  messagingSenderId: "118696642712",
  appId: "1:118696642712:web:aa2b58d10519e785e468ed",
  measurementId: "G-2LSRJ5PE8X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);



