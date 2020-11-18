import React, { useEffect, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../CSS/nav.css';
import { LoginContext } from './../Contexts/LoginContext';


const Nav2 = () => {
    const [ loginResult, setLoginResult ] = useContext(LoginContext);

    //On Mobile -> display the navigation bar on fa-bars clicked
   const nav2Clicked = () => {

        const getul = document.querySelector("ul.ulnav2");
        if(getul.style.left === "-100%"){
            getul.style.left = "0%";
        }else if(getul.style.left === "0%"){
            getul.style.left = "-100%";
        }

    }

    //Assign click event and handle it to each menu option
    //componentDidMount = () => { nav2Mobile(); }
    useEffect(()=>{
        nav2Mobile();

        showHideLogin();
    })

   const nav2Mobile = () => {

        let nav_tab = document.querySelectorAll(".linav2");
        for(let i = 0; i < nav_tab.length; i++){
            nav_tab[i].addEventListener("click", optionNavClicked);
        }

    }

    //Slide the navigation bar back if menu option is clicked
    const optionNavClicked = () => {

        const getul = document.getElementsByTagName("ul"); 
        getul[0].style.left = "-100%";

    }

    function showHideLogin(){
        const login_show = document.getElementById("display-login");
        const logout_show = document.getElementById("display-logout");
        

        if(loginResult.getLogin == 'custSucc'){
            //display logout
            logout_show.style.display = 'inline-block';
            login_show.style.display = 'none';


        }else{
            //display login
            login_show.style.display = 'inline-block';
            logout_show.style.display = 'none';
        }
    }

    const loginTriggered = () => {
        setLoginResult({ getLogin: 'custSucc' });
            //nav2Clicked();
            optionNavClicked();

    }

    const logoutTriggered = () => {
        setLoginResult({ getLogin: 'no' });

        //setDeliveryInfo({});

        optionNavClicked();
        
    }

    
        return(
            <>
            <div className="nav-2" id="top-nav-2">
                <input type="checkbox" id="check"/>
                <label htmlFor="check"><i onClick={ nav2Clicked } className="fa fa-bars"></i></label>
                
                   <img className="img-logo" src={require('../Img/spa-logo-updated.png')} alt="check mark" />
               
                <ul className = "ulnav2">
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2 active">Home</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Services</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">About Us</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Register</HashLink></li>
                    <li className="linav2"><HashLink to="/#reg-form" className="a-nav2">Contact Us</HashLink></li>
                    
                    <li className="linav2" id="display-login" onClick={ loginTriggered } style={{marginTop:"0", color: "white", fontSize:"1rem"}}>Log In</li>
                    <li className="linav2" id="display-logout" onClick={ logoutTriggered } style={{marginTop:"0", color: "white", fontSize:"1rem"}}>Log Out</li>
                </ul>
            </div>
            </>
        )
    
}

export default Nav2;