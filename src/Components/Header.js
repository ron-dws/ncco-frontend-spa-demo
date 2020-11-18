import {React} from 'react';
import '../CSS/style.css';

export const Header = () => {
        const title = "Demo Spa";
            return(
                <div className="header-main">
                    <img className="img-logo" src="./imgs/spa-logo-updated.png" alt="NCCO SPA" />
                    <h1>{ title }</h1>
                </div>
            )
        }
