import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
apiKey: "AIzaSyAeqMROkoyyzcn_mY4dUQivOlSngLQFsd0",
authDomain: "mkuulima-547e7.firebaseapp.com",
projectId: "mkuulima-547e7",
storageBucket: "mkuulima-547e7.appspot.com",
messagingSenderId: "768238557735",
appId: "1:768238557735:web:85878da33a75b48f0b8c02"
};

let Firebase;

if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;