import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth();
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])

    //create user account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut = () => {
        return signOut(auth);
    }

    //googleSignIn
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        createUser,
        logIn,
        logOut,
        googleSignIn,
        user
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;