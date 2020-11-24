import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD3_vecRA9wNYLLaHFCxr4TxIyh6WmP23E",
    authDomain: "crwn-db-308ca.firebaseapp.com",
    databaseURL: "https://crwn-db-308ca.firebaseio.com",
    projectId: "crwn-db-308ca",
    storageBucket: "crwn-db-308ca.appspot.com",
    messagingSenderId: "555586162627",
    appId: "1:555586162627:web:6c0f884b4a9360ff6d3776"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;