import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeFirebaseApp from "../firebaseConfig/InitializeFirebaseApp";

initializeFirebaseApp();
const provider = new GoogleAuthProvider();

const UseFirebase = () => {

    // auth and provider
    const auth = getAuth();
    const [user, setUser] = useState({});

    const firebaseCopyCode = () =>{

        signInWithPopup(auth, provider)
        .then( result => {
            setUser(result.user);
        }).catch();
    };


    // 1 bar click hoilai jeno potibar start hoar somoe , nije nije click hote pare tar jonno.{useEffect}

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                }
        });
        return () => unsubscribed;
        },[]);

// signuot er jonno
    const signOutfunction = () => {
        signOut(auth)
        .then(() => {
            setUser({});
            window.location.reload(false);
        });
    }

    // a function er sob kichu return korar jonno 
    return {firebaseCopyCode, user, signOutfunction, setUser};
};

export default UseFirebase;



// -------------------------------------------------------

// import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,createUserWithEmailAndPassword} from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeAuthentication from "../conponent/Firebase/firebase.init";

// initializeAuthentication();
// const googleProvider = new GoogleAuthProvider();
// const useFirebase=() => {
//     const auth = getAuth(); 
//     const [user,setUser]= useState({});

   
    

// // 
//     const handleGoogleSignIn = () => {
//         signInWithPopup(auth, googleProvider)
//           .then(result => {
//             setUser (result.user);
            
//           }).catch();
//       }
// // Stay This Page
// useEffect(() => {
//   const unsubscribed = onAuthStateChanged(auth, user => {
//       if (user) {
//           setUser(user);
//       }
      
      
//   });
//   return () => unsubscribed;
// }, []);

// // Logout Now
// const logOut = () => {

//   signOut(auth)
//       .then(() => {  setUser({})});
// }




   
//         return {
//             handleGoogleSignIn,
//             user,
//             logOut,
//             setUser
            
//         }

// }
// export default useFirebase;