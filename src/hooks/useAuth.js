import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import initializationAuthentication from "../utilities/firebase/firebase.init";

const useAuth = () => {
    initializationAuthentication();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        }
        else {

        }
    })

    const logOutFromLogin = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }







    return {
        signInUsingGoogle,
        logOutFromLogin,
        user,
        error,
        setUser,
        setError,

    }

}

export default useAuth;