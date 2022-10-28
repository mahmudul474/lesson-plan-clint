// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHKk9ri3SmALgCDxz7svvcvO5FHeJzRZ4",
  authDomain: "dragon-news-aef1e.firebaseapp.com",
  projectId: "dragon-news-aef1e",
  storageBucket: "dragon-news-aef1e.appspot.com",
  messagingSenderId: "402726323128",
  appId: "1:402726323128:web:50715df2dc3c67f5e4c54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;