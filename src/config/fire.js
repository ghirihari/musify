import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA05o3Bzh32A5QEHArh5VyTiNcGuh5dxCk",
    authDomain: "musify-ghiri.firebaseapp.com",
    databaseURL: "https://musify-ghiri.firebaseio.com",
    projectId: "musify-ghiri",
    storageBucket: "musify-ghiri.appspot.com",
    messagingSenderId: "624179241757",
    appId: "1:624179241757:web:d7f67870beefa78abab7f4",
    measurementId: "G-8HJNE36X0L"
  };
  
 firebase.initializeApp(firebaseConfig);
 export default firebase;
