import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXKHVKkBOOOJ754aCBa7EJwohkLGF5pHM",
    authDomain: "feedback-react-9d257.firebaseapp.com",
    databaseURL: "https://feedback-react-9d257-default-rtdb.firebaseio.com",
    projectId: "feedback-react-9d257",
    storageBucket: "feedback-react-9d257.appspot.com",
    messagingSenderId: "472998110879",
    appId: "1:472998110879:web:14cb16ae4b3da78419e4aa"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase
