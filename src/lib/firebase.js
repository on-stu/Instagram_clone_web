import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from "../seed";

const config={
    apiKey: "AIzaSyDTiieW4CXiqai31fnc_74LF2UL_YkXzk4",
    authDomain: "instagram-clone-app-b5aba.firebaseapp.com",
    projectId: "instagram-clone-app-b5aba",
    storageBucket: "instagram-clone-app-b5aba.appspot.com",
    messagingSenderId: "349735066139",
    appId: "1:349735066139:web:32a085a106026da0e636be",
    measurementId: "G-3WR2DVCM8X"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

// console.log(firebase);

// seedDatabase(firebase);

export { firebase, FieldValue };