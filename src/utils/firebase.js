import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyB8_U35TYjQOKFIIVv4yrBKgGrg29geYQk",
    authDomain: "ten-zies.firebaseapp.com",
    projectId: "ten-zies",
    storageBucket: "ten-zies.appspot.com",
    messagingSenderId: "736977524180",
    appId: "1:736977524180:web:ab36b9ab423bf92a387241",
    measurementId: "G-NL7FBD3HYL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);