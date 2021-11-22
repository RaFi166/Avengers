import initAuthentication from "../Firebase/initializeApp";

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";

initAuthentication();

const useFirebaseHooks = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //register
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const regSubmission = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                const auth = getAuth();
                sendEmailVerification(auth.currentUser)
                    .then((result) => {
                        alert("Check Email & Verify its your account")
                    });
            })
    }

    // signin using google
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
    }

    //logout
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        })
    }

    return {
        googleSignIn,
        user,
        logout,
        email,
        password,
        getEmail,
        getPassword,
        regSubmission
    }
}


export default useFirebaseHooks;

