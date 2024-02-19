// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbnOkUXNm_TWb-Tp04pQeIMoWeMZ2RjkE",
  authDomain: "eshop-eb574.firebaseapp.com",
  projectId: "eshop-eb574",
  storageBucket: "eshop-eb574.appspot.com",
  messagingSenderId: "320322837877",
  appId: "1:320322837877:web:6f27714744d2029295473c",
  measurementId: "G-XDZQL1J23W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app