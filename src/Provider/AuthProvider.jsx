import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
    
        const unsubscribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser)
        });
        // stop observing while unmount
        return ()=>{
            return unsubscribe()
        };
    });

    const logInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
         })
         .catch(e =>{
            console.log(e)
         })
    }
    const logInWithGitHub =()=>{
        return signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user)
         })
         .catch(e =>{
            console.log(e)
         })
    }
    
    const logOut =()=>{
        return signOut(auth)
    }
    const authInfo ={
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