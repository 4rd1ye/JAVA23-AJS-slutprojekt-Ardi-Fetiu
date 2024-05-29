import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsK7Z_5DRorwfWe9J7fm9foAHNADN14io",
    authDomain: "jsa-slutprojekt-ardi-fetiu.firebaseapp.com",
    projectId: "jsa-slutprojekt-ardi-fetiu",
    storageBucket: "jsa-slutprojekt-ardi-fetiu.appspot.com",
    messagingSenderId: "214270489317",
    appId: "1:214270489317:web:37f1a2b681aa0015941a0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };