// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFjPMmlwuQSIlpl3S3k47nFk8isDs_Wsw",
  authDomain: "proyectoseguridad-76615.firebaseapp.com",
  projectId: "proyectoseguridad-76615",
  storageBucket: "proyectoseguridad-76615.appspot.com",
  messagingSenderId: "669355918710",
  appId: "1:669355918710:web:f7d19efda38f384cd82657",
  measurementId: "G-5TZMP3G8XH"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase
