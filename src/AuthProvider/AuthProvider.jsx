import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext()


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
        logOutUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;