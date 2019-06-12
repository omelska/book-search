import React from "react";
import "./style.css";

const Img = (props)=>{
    return(
        <img className="img-fluid" src={props.url} alt={props.alt}></img>
    )
}

export default Img;