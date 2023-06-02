// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoSjLbCWxt0HvTmgN2GsnKJpjDmZaQgSo",
    authDomain: "aichat-c9069.firebaseapp.com",
    projectId: "aichat-c9069",
    storageBucket: "aichat-c9069.appspot.com",
    messagingSenderId: "73286499554",
    appId: "1:73286499554:web:d385ff63b38ead426632bb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);