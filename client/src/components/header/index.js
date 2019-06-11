import React from "react";
import "./style.css"

const Header =(props)=>{
        return(
            <header>
                <h1>React <span>
                    <img src="../../../public/images/google.png" alt="google" id="google"></img>
                    </span> Book Search</h1>
                <div>
                    {props.children}
                </div>
                
            </header>
        )
    
}

export default Header;