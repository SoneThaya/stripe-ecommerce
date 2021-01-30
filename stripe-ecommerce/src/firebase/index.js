import firebase from "firebase/app";
import "firebase/firestore"; // for the db
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNpGIHSUYexPMkHDzKUf9PPCA2J3ZBDA0",
  authDomain: "nomad-bags-store-9d304.firebaseapp.com",
  projectId: "nomad-bags-store-9d304",
  storageBucket: "nomad-bags-store-9d304.appspot.com",
  messagingSenderId: "686268561477",
  appId: "1:686268561477:web:19a01ad8bad7dcf6134b2c",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };
