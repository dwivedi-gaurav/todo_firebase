import firebase from 'firebase/app';
import 'firebase/firestore';

const CONFIG = {
    apiKey: "AIzaSyANwzBS3QSESPM_92OU10MxS6lU8wtJHdg",
    authDomain: "todo-55ad9.firebaseapp.com",
    databaseURL: "https://todo-55ad9.firebaseio.com",
    projectId: "todo-55ad9",
    storageBucket: "todo-55ad9.appspot.com",
    messagingSenderId: "666265525869",
    appId: "1:666265525869:web:212aa44f0dcc184f32a964",
    measurementId: "G-7ZE3G8GFFT"
}

firebase.initializeApp(CONFIG);
firebase.firestore();

export default firebase;