import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC4-ByswaIXwUXJVO9SogqTtzyBTXythgk",
        authDomain: "messenger-app-3f386.firebaseapp.com",
        databaseURL: "https://messenger-app-3f386.firebaseio.com",
        projectId: "messenger-app-3f386",
        storageBucket: "messenger-app-3f386.appspot.com",
        messagingSenderId: "879754755739",
        appId: "1:879754755739:web:f16ff8daa75369c5dd103e",
        measurementId: "G-FX4E6W6ZG9"
});

const db = firebaseApp.firestore();

export default db;