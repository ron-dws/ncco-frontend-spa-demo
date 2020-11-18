import { React, useContext, useEffect} from "react";
import { LoginContext } from "../Contexts/LoginContext.js";
import { MessageResponseContext } from "../Contexts/MessageResponseContext.js";
import { UserLoginContext } from "../Contexts/UserLoginContext.js";
import {Header} from './Header.js';
import { Link } from 'react-router-dom';
import Axios from "axios";

export const Login = () => {
    const [ loginResult, setLoginResult ] = useContext(LoginContext);
    const [ userInfo, setUserInfo ] = useContext(UserLoginContext);
    const [ responseMssResult, setResponseMssResult ] = useContext(MessageResponseContext);

    useEffect(()=>{

      //animate inputs when the page load
       setTimeout(() => {
           animate_input();
        },2000);  
      
      });

   const animate_input = () => {
       const list_item1 = document.getElementsByClassName("first_list");

       for(let i = 0; i < list_item1.length; i++){
        list_item1[i].style.animation = `list_animation .${i}s .${i+3}s forwards`;
      }
    }

    const loginCheck = (e)=>{
        const url = "";

     
        e.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        //Check the validation has passed the test
        let val_return = check_validation(email, password);

        if(!val_return){
          console.log("cannot process login");
          return;
        }

        //Send request to server & handle response
        const test_cust = "cust";
        const test_admin = "admin";
        const result_login = "cust";
        
        if(result_login === test_cust){
          //success login for simple user
          //alert(email + "  " + password);
          setLoginResult({ getLogin: 'custSucc' });

          //get cust data and record (will come from endpoint)
          setUserInfo({fn: 'Scott', ln: 'Akondjo', email:'wank@yah.com', addresse: '304 Mary neet', city:'ST CLOUD', state:'MN', zip:'56305'});
          
          setResponseMssResult("You have been successfully logged in");
          
              //display message only for 3 seconds
              const display_reg_mss = document.getElementById("p-mss-display");
              display_reg_mss.style.color = "green";
              display_reg_mss.padding = "10px";
              display_reg_mss.border = "1px solid green";
              display_reg_mss.style.transition = "1s ease";
              display_reg_mss.style.display = "block";
              
          //window.location.assign("/clientslist"); //redirect to the clientslist component
          const displayMessage = (callback) => {
            setTimeout(()=>{
              display_reg_mss.style.display = "none";
              callback();
           },4000);
          }
          
          const redirectToSuccess = () => {
             //Redirect to the Success component
             const btnSuccess = document.getElementsByClassName("btn-success");
             btnSuccess[0].click();
          }
          
          //call the function to redirect to the success after 5s
          displayMessage(redirectToSuccess);
                    
        }else if(result_login === test_admin){
          //alert("admin login");
          setLoginResult({getLogin: 'adminSucc'});

        }else {
          setLoginResult({getLogin: 'no'});

          setResponseMssResult("Sorry, We could not log you in!");
                      
          //display message only for 3 seconds
          const display_reg_mss = document.getElementById("p-mss-display");
          display_reg_mss.style.color = "red";
          display_reg_mss.style.transition = "1s ease";
          display_reg_mss.padding = "10px";
          display_reg_mss.border = "1px solid red";
          display_reg_mss.style.display = "block";
          setTimeout(()=>{
              display_reg_mss.style.display = "none";
          },4000);

        }
    
    }

    //check inputs validation
  const check_validation = (em, pass)=>{
    const val_em = document.getElementById("validate_log_email");
    const val_ps = document.getElementById("validate_log_pass");
    //hide error validation if inputs fill
    val_em.style.display = "none";
    val_ps.style.display = "none";

    let form_validity = false;

    if(em === "" && pass === ""){
        val_em.style.display = "block";
        val_ps.style.display = "block";
        setTimeout(()=>{val_em.style.opacity = "1";
                        val_ps.style.opacity = "1";
                       },200);
        
    }else if(em === ""){
      val_em.style.display = "block";
      setTimeout(()=>{val_em.style.opacity = "1";},200);

    }else if(pass === ""){
        val_ps.style.display = "block";
        setTimeout(()=>{val_ps.style.opacity = "1";},200);
        
    }else{
      //post login to api
      // console.log(JSON.stringify(this.state));

       form_validity = true;
    }
    return form_validity;
  }

    return(
        <div className="animate-bottom wp-project-card">
         <div className="home-container">
          <Header />
          <p id="p-mss-display" className="p-error-mss">{ responseMssResult }</p>
          <div id="reg-form" className="login-form">
            
            <form onSubmit={ (e) => loginCheck(e) }>
              
                <input id="email" className="input-form wp-input first_list" type="text" name="email"  placeholder="Enter your email" /><br/>
                <div id="validate_log_email"><span>* please enter your email</span></div>
                <input id="ps" className="input-form wp-input first_list" type="password" name="password" placeholder="Enter your Password" /><br/>
                <div id="validate_log_pass"><span>* please enter your password</span></div>
                <button className="btn-login first_list" type="submit">Log In</button><br/>

                <Link to="/Success">
                  <button className="btn-success" style={{ display: "none" }} name="success">Sucess</button>
                </Link>

            </form>
           </div>
          </div>  
        </div>
    )
}