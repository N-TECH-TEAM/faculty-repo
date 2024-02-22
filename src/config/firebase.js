// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbKqdJUJdXAHyY0t0Jddrs6xMrtWMhXBw",
  authDomain: "login-6a135.firebaseapp.com",
  projectId: "login-6a135",
  storageBucket: "login-6a135.appspot.com",
  messagingSenderId: "915936065913",
  appId: "1:915936065913:web:85a77c9ca211e9a9cc57a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)