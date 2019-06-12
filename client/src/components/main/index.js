import React from "react";
import "./style.css"

const Main = (props)=>{
    return(
        <main className="container">
            {props.children}
        </main>
    )
}

export default Main;