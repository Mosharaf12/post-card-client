import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSign=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const userCreate=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileData = (profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser , profile)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('state change',currentUser);
            setUser(currentUser)
            setLoading(false);
    
        })
        return()=>{
            return unsubscribe;
        }
       },[])



    const getInfo ={
        user,
        loading,
        googleSign,
        logOut,
        userCreate,
        signIn,
        updateProfileData
    }

    return (
        <div>
            <AuthContext.Provider value={getInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;