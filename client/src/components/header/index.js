import React from "react";
import "./style.css"
import google from "../../assets/images/google.png"

const Header =(props)=>{
        return(
            <header>
                <h1>React <span>
                    <img src={google} alt="google" id="google"></img>
                    </span> Book Search</h1>
                <div>
                    {props.children}
                </div>
                
            </header>
        )
    
}

export default Header;