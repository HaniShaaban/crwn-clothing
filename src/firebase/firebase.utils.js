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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

// firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;