// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYwLdjRcD2VvPPjk28_IH1d-XL-7OFT9c",
  authDomain: "laolaurbana-4280b.firebaseapp.com",
  projectId: "laolaurbana-4280b",
  storageBucket: "laolaurbana-4280b.appspot.com",
  messagingSenderId: "395562193238",
  appId: "1:395562193238:web:96cf4062843632a42446f7",
  measurementId: "G-5LZT6H482L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

