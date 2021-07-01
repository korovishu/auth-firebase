import firebase from 'firebase'

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCMeLuTgxZ3rcB4FUohQX-58jS02_hyyVA",
    authDomain: "auth-firebase-6d4b8.firebaseapp.com",
    projectId: "auth-firebase-6d4b8",
    storageBucket: "auth-firebase-6d4b8.appspot.com",
    messagingSenderId: "1000750204134",
    appId: "1:1000750204134:web:5c7d7c72bb7a61baf8a727"
}

export default function firebaseClient() {
    if(!firebase.apps.length){
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}