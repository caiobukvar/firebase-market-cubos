// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzZCwQ0p1LDGxyCRwg9F3EzUsxDVBUucc",
    authDomain: "market-cubos.firebaseapp.com",
    databaseURL: "https://market-cubos-default-rtdb.firebaseio.com",
    projectId: "market-cubos",
    storageBucket: "market-cubos.appspot.com",
    messagingSenderId: "664564992972",
    appId: "1:664564992972:web:f612f8f82b5d09bbf9ab69",
    measurementId: "G-50CEJVTRKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);