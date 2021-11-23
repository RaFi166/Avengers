import initAuthentication from "../Firebase/initializeApp";

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router";

initAuthentication();

const useFirebaseHooks = () => {
    const history = useHistory();
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
                        alert("Check Email & Verify that it's your account")
                    })
    })
}


    //signin with email password
    const loginUser = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Login successfull");
                history.push("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
        })
    }

    // signin using google
    const googleprovider = new GoogleAuthProvider();
    
        const googleSignIn = () => {
            const auth = getAuth();
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
            regSubmission,
            loginUser,
            error
        }

}
    export default useFirebaseHooks;

