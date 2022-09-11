import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8enoW6PtF7kNbcc4TlIbIv7PMXx-DGO4",
    authDomain: "clone-9b6c3.firebaseapp.com",
    projectId: "clone-9b6c3",
    storageBucket: "clone-9b6c3.appspot.com",
    messagingSenderId: "942167827666",
    appId: "1:942167827666:web:022a76239dfc087940390b",
    measurementId: "G-W1PSHYMKFD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};