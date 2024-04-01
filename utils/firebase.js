// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8VtoUOcL0BecrsyOSKfdijevWrGG94P8",
    authDomain: "test-assignment1.firebaseapp.com",
    projectId: "test-assignment1",
    storageBucket: "test-assignment1.appspot.com",
    messagingSenderId: "292719556983",
    appId: "1:292719556983:web:840e5adfd5071069294972",
    measurementId: "G-QHERE58HW8"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export default firebase;
