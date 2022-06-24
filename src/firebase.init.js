// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyCLWaVziO--yuEEEZXqgGCZ4Q1WWbJGVEQ",
    authDomain: "xetgo-solver.firebaseapp.com",
    projectId: "xetgo-solver",
    storageBucket: "xetgo-solver.appspot.com",
    messagingSenderId: "1031375377987",
    appId: "1:1031375377987:web:0ff8db41252d20f41726f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;