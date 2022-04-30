// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYfgVOVMscNSwKLOUt205zniOJomL6l-w",
    authDomain: "wonder-of-books-house.firebaseapp.com",
    projectId: "wonder-of-books-house",
    storageBucket: "wonder-of-books-house.appspot.com",
    messagingSenderId: "917931617648",
    appId: "1:917931617648:web:9508182c9212c9b0f473b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
