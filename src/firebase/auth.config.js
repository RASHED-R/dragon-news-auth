// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAelyuYZKEs-ZiXzjavrkcByiAYct8eimU",
    authDomain: "dragon-news-auth-8cd74.firebaseapp.com",
    projectId: "dragon-news-auth-8cd74",
    storageBucket: "dragon-news-auth-8cd74.appspot.com",
    messagingSenderId: "35204941529",
    appId: "1:35204941529:web:dec391f5f80d9bfd8be0c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;