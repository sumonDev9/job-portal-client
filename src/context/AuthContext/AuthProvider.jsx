import React, { useEffect, useState } from 'react';
import AuthContex from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logoutUser = () => {
        setLoading(true)
        signOut(auth)
    }
    useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
           
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;