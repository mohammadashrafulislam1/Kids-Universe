import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState();
    const [loader, setLoader] = useState();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) =>{
        setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        setLoader(false)
        const unsubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser)
        });
        // stop observing while unmount
        return ()=>{
            return unsubscribe()
        };
    });

    const logInWithGoogle =()=>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
         })
         .catch(e =>{
            console.log(e)
         })
    }
    const logInWithGitHub =()=>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user)
         })
         .catch(e =>{
            console.log(e)
         })
    }
    
    const logOut =()=>{
        setLoader(true)
        return signOut(auth)
    }
    const authInfo ={
        loader,
        user,
        createUser,
        logOut,
        signIn,
        logInWithGoogle,
        logInWithGitHub
    }
    return (
        <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;