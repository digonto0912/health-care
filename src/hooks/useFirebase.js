import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initialAuthentication from '../Firebase/firebase.init';

initialAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(result.user);
            }).catch(error => {
                setError(error.message);

            })
            


    }
    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});

            })

    }
    //sign in with email and password
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                
               setUser(result.user);
                console.log(result.user);
                setError ('');
                
            })
            .catch((error) => {
                setError(error.message);
            });
    };
//register with  existing user 
   const  registerWithExistingUser = (email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })

    }
    //reset password in with existing user
    const handleResetPassword =(email)=>{
        sendPasswordResetEmail (auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })


    }
    

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                
                setUser(user);
            }
        })

    }, [])

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        handleUserRegister,
        handleResetPassword, registerWithExistingUser
    }
};

export default useFirebase;