import React, { useState, createContext } from "react";

export const UserLoginContext = createContext();

export const UserLoginContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState({});
    return(
        <UserLoginContext.Provider value={[ userInfo, setUserInfo ]}>
            { props.children }
        </UserLoginContext.Provider>
    )
}