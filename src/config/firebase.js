// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRmj2LXwjlKAMWo12kJONTkCQS8JFx1gI",
  authDomain: "fir-course-49ca1.firebaseapp.com",
  projectId: "fir-course-49ca1",
  storageBucket: "fir-course-49ca1.appspot.com",
  messagingSenderId: "251539819291",
  appId: "1:251539819291:web:301455b9177469a48221be",
  measurementId: "G-SNDBMFT9W4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
