import React, { useContext, useEffect } from 'react';
import Nav from './Nav';
import { HashLink } from 'react-router-hash-link';
import { LoginContext } from '../Contexts/LoginContext';
import { UserLoginContext } from "../Contexts/UserLoginContext.js";



export const Success = () => {
    const [ loginResult, setLoginResult ] = useContext(LoginContext);
    const [ userInfo, setUserInfo ] = useContext(UserLoginContext);
    

    useEffect(()=>{

        //This component must be accessible only if the customer has logged in successfuly
        IfLogged();
        
     });
  
     function IfLogged() {
       if( loginResult.getLogin == "no" ){
           //Redirect to the login module (Home)
           const backHome = document.getElementById("btn-back-on-login");
           backHome.click();
        }else{
          return;
        }
      }

 
        return(
            <>
            
             <div className="success-container">
                <h1 id="h1-main" className="h1-success">Hi {userInfo.fn}</h1>
                
                <HashLink to="/">
                  <button type="button" id="btn-back-on-login" className="btn-back-on-login" >
                      <i className="fa fa-long-arrow-left" style={{font:"10px", paddingRight:"5px"}}></i>
                      Back Home
                  </button>
                </HashLink>
             </div>
             
            </>
        )
   
}