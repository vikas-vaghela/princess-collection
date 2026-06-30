import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Yahan apna wo config paste karein jo aapne Firebase Console se copy kiya tha
const firebaseConfig = {
    apiKey: "AIzaSyAqCkYfpN1MQzOmDUo76I0tCORQDNJWenw",
    authDomain: "princess-collection-6adc3.firebaseapp.com",
    projectId: "princess-collection-6adc3",
    storageBucket: "princess-collection-6adc3.firebasestorage.app",
    messagingSenderId: "1058275008919",
    appId: "1:1058275008919:web:5df86e59d15f2a83ad64d2"
};

// Firebase Initialize karein
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);