// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRaSeQL4lRssN9H7dLEu-KTK8tO7KywTE",
  authDomain: "tmtproject-eec74.firebaseapp.com",
  projectId: "tmtproject-eec74",
  storageBucket: "tmtproject-eec74.appspot.com",
  messagingSenderId: "556207832084",
  appId: "1:556207832084:web:7d341837b856a54a29fb01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db, collection, getDocs}