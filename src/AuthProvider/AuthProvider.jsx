import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext()


const googleProvider = new GoogleAuthProvider()
const GitHubProvider = new GithubAuthProvider()
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


    // reset password 

    const resetPassword = (email) =>{
       return sendPasswordResetEmail(auth, email)
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
        logOutUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;