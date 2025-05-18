// firebase.js
const firebaseConfig = {
  apiKey: "can't paste here",
  authDomain: "ecofinds-5fbfb.firebaseapp.com",
  projectId: "ecofinds-5fbfb",
  storageBucket: "ecofinds-5fbfb.appspot.com",
  messagingSenderId: "can't paste here",
  appId: "can't paste here"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
