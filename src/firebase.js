// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHo4KNLLt7x0HXXe6YP-Ca0Ql3D6LY9jo",
  authDomain: "jornada-milhas-e0264.firebaseapp.com",
  projectId: "jornada-milhas-e0264",
  storageBucket: "jornada-milhas-e0264.firebasestorage.app",
  messagingSenderId: "1098464713951",
  appId: "1:1098464713951:web:d6affb822eb00a0e099d6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();
