import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
export const MyCreateContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('current user', currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('Nouser logged in')
    //         setUser(null)
    //     }
    // })


    const name = 'My Context Name';
    const age = '100'
    const authInfo = {
        name,
        age,
        createUser,
        signInUser,
        user,
        signOutUser,
        loading
    }
    return (
        <MyCreateContext.Provider value={authInfo}>
            {children}
        </MyCreateContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. Create Provider
 * 3.  set a Default value
 * 4.[Attaion Please!!!!!!! ]
 * 5. use AuthProvider in main.jsx 
 * 6. assess the children inside the authProvider in the main jsx 
 */





