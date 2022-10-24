import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userNameUrl = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }

            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        googleSignIn,
        logOut,
        register,
        logIn,
        userNameUrl,
        setLoading,
        loading,
        varifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;