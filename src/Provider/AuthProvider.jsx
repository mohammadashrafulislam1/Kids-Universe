import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState();

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
    
    const logOut =()=>{
        return signOut(auth)
    }
    const authInfo ={
        user,
        createUser,
        logOut,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;