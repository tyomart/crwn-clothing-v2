// import { useEffect } from 'react';
// import { getedirectResult } from 'firebase/auth'

import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
        } from 'firebase/auth'

import { getFirestore,
        doc,
        getDoc,
        setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB3NvFBiUHgEX11NxLzFvSTAHbEyCjFSUI",
    authDomain: "crwn-clothing-db-28f53.firebaseapp.com",
    projectId: "crwn-clothing-db-28f53",
    storageBucket: "crwn-clothing-db-28f53.appspot.com",
    messagingSenderId: "50450942807",
    appId: "1:50450942807:web:8b4d49c5e370bad7090c12"
  };
  
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
//   googleProvider instead of provider
  const googleProvider = new GoogleAuthProvider(); 
  googleProvider.setCustomParameters({
    
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
//export const signInWithGoogleRedirect = () => signInWithRedirect (auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation ={} 
    
    ) => { //userAuth ??? object from Goo auth
    const userDocRef = doc(db, 'users', userAuth.uid);
    

    const userSnapshot = await getDoc(userDocRef);
  


if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
        }
    catch (error) {
        console.log('error creating the user', error.message)
        }
    }
return userDocRef;
} ;

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    createUserWithEmailAndPassword(auth, email, password)
}

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth); 

export const onAuthStateChangedListener = (callback) => {onAuthStateChanged(auth, callback)};




//dfd




