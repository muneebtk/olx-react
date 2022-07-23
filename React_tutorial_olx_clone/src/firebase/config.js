import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDg7U7lDTKPxseMUMAo_TiWvMw-a8QfZlU",
    authDomain: "fir-bca06.firebaseapp.com",
    projectId: "fir-bca06",
    storageBucket: "fir-bca06.appspot.com",
    messagingSenderId: "759953485029",
    appId: "1:759953485029:web:a8d3cf3642f17e586cb80c",
    measurementId: "G-RVM9P4BFC6"
  };

export default firebase.initializeApp(firebaseConfig)