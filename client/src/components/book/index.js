import React from "react";
import Img from "../img";
import DeleteBtn from "../deleteBtn";
import "./style.css"

const Book = (props)=>{
    return (
        <div>
        <h2>{props.title}</h2>
        <div className="row">
            
            <div className="col-lg-3 align-self-center">
                <Img  url={props.url} alt={props.alt} />
            </div>
            <div className="col-lg-6">
                <h3>Authors: {props.authors}</h3>
                <p>{props.description}</p>
             </div>
                <div className="col-lg-3 align-self-center">
                     <div>
                       <a href={props.link}><button className="btn btn-warning ">VIEW</button></a>  
                     </div>
                     <div>
                         <DeleteBtn />
                     </div>
                     
                 </div>
        </div>
        </div>
    )
}

export default Book;