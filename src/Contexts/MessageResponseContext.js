import React, { useState, createContext } from 'react';

export const MessageResponseContext = createContext();

export const MessageResponseProvider = (props) => {
    const [ responseMssResult, setResponseMssResult ] = useState();
    return(
        <MessageResponseContext.Provider value = {[ responseMssResult, setResponseMssResult ]}>
            {props.children}
        </MessageResponseContext.Provider>
    )
}