import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDkoYal57--d-X95V9CF36MvY-5oZ_4PFs",
    authDomain: "movie-recommendation-app-8f7f7.firebaseapp.com",
    projectId: "movie-recommendation-app-8f7f7",
    storageBucket: "movie-recommendation-app-8f7f7.appspot.com",
    messagingSenderId: "1002061884132",
    appId: "1:1002061884132:web:9bcb9470dd7ae998f4daf1"
  })

const firestoreDB=firebaseApp.firestore();
const auth=firebaseApp.auth();

export default {firestoreDB,auth}