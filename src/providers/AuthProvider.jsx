import React, { createContext } from 'react';
export const MyCreateContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo = {
        name:'My Context Name',
        age: '100'
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





