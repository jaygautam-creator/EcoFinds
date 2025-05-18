// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDGLANAXVM96w9RnV2PSppveKg1PhKtojE",
  authDomain: "ecofinds-5fbfb.firebaseapp.com",
  projectId: "ecofinds-5fbfb",
  storageBucket: "ecofinds-5fbfb.appspot.com",
  messagingSenderId: "122720610625",
  appId: "1:122720610625:web:94390613b4838faa0e59c0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
