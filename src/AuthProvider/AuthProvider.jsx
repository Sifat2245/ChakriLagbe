import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext()


const googleProvider = new GoogleAuthProvider()
const GitHubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user);

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin user

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google 

    const loginWIthGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // sign in with github

    const loginWithGitHub = () =>{
        return signInWithPopup(auth, GitHubProvider)
    }

    // sign in with facebook

    const loginWithFacebook = () =>{
        return signInWithPopup(auth, facebookProvider)
    }


    // reset password 

    const resetPassword = (email) =>{
       return sendPasswordResetEmail(auth, email)
    }

    //update profile

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }


    //signout user

    const logOutUser = () =>{

            return signOut(auth)
    }

    //state change
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    }, [])


    const authData = {

        user,
        setUser,
        createUser,
        loginUser,
        loginWIthGoogle,
        loginWithGitHub,
        resetPassword,
        updateUser,
        logOutUser,
        loginWithFacebook
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;