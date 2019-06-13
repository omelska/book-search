import React, {useState} from "react";

const SaveBtn = (props)=>{
    const [book, setBook] = useState("");

    return(
        <button className="btn btn-warning">SAVE</button>
    )
}

export default SaveBtn;