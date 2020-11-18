import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
    const [ loginResult, setLoginResult ] = useState({getLogin:'no'});
    return(
        <LoginContext.Provider value = {[loginResult, setLoginResult]}>
            {props.children}
        </LoginContext.Provider>  
    )
}