import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
// apiKey: "AIzaSyAvied3_zWOqLiGiy0GRpS0SsgdGxWIoDo",
// authDomain: "geocalculator-91eb9.firebaseapp.com",
// databaseURL: "https://geocalculator-91eb9-default-rtdb.firebaseio.com",
// projectId: "geocalculator-91eb9",
// storageBucket: "geocalculator-91eb9.appspot.com",
// messagingSenderId: "364173846204",
// appId: "1:364173846204:web:4fdcafaaa8e55491f152b9",
// measurementId: "G-3HERSZZ39E"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCZ9iimVZUpzRFfCJ1q68CXaPLVjtZ2AJs",
  authDomain: "mynotesapp-bc0d6.firebaseapp.com",
  databaseURL: "https://mynotesapp-bc0d6-default-rtdb.firebaseio.com",
  projectId: "mynotesapp-bc0d6",
  storageBucket: "mynotesapp-bc0d6.appspot.com",
  messagingSenderId: "219049855631",
  appId: "1:219049855631:web:e7915e813f430d8bea3efa",
  measurementId: "G-E95E0WY6C5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}