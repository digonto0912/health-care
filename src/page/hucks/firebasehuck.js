import React, { useState, useEffect } from 'react';
import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut } from "firebase/auth";
import initializeFirebaseApp from "../firebaseConfig/InitializeFirebaseApp";

initializeFirebaseApp();

const Firebasehuck = () => {

    // auth and provider
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const firebaseCopyCode = () =>{

        signInWithPopup(auth, provider)
        .then((result) => setUser(result.user))
        .catch((error) => setError(error.message));

    };


    // 1 bar click hoilai jeno potibar start hoar somoe , nije nije click hote pare tar jonno.{useEffect}

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                }
                
             else {
                setError(error)
                }
        });
        },[]);

// signuot er jonno
    const signOutfunction = () => {
        signOut(auth)
        .then(() => {
            setUser({});
            window.location.reload(false);
        }).catch((error) => {
            setError({});
        });
    };

    // a function er sob kichu return korar jonno 
    return {firebaseCopyCode, user, error, signOutfunction};
};

export default Firebasehuck;