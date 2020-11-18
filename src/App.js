import React from 'react';
import './App.css';
import './CSS/style.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Components/Login.js';
import { Success } from './Components/Success.js';
import { UserLoginContextProvider } from './Contexts/UserLoginContext';
import { LoginProvider } from './Contexts/LoginContext';
import { MessageResponseProvider } from './Contexts/MessageResponseContext';

const App = () => {
  return (
    <HashRouter>
      <UserLoginContextProvider>
        <LoginProvider>
          <MessageResponseProvider>
            <Switch>
              <Route exact path="/" component={ Login } /> 
              <Route path="/Success" component={ Success } />
              <Route path="*" component={ () => {return( <h1 className="h1-error-page">Processing Error</h1>)}} />
            </Switch> 
          </MessageResponseProvider>
        </LoginProvider>
      </UserLoginContextProvider>
    </HashRouter> 
  );
}

export default App;
