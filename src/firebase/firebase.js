import firebase from "firebase/";

const firebaseConfig = {
  apiKey: "AIzaSyDlXuaUTnb82U7GOOgCBn32IXni0BkVloE",
  authDomain: "ndurikhaecommclone.firebaseapp.com",
  projectId: "ndurikhaecommclone",
  storageBucket: "ndurikhaecommclone.appspot.com",
  messagingSenderId: "18949854764",
  appId: "1:18949854764:web:fe7f2a16b9fc7dc9a5a389",
  measurementId: "G-CXGZVWGWYE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

const auth = firebase.auth();

export { database, auth };
