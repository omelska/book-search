import React, {useState, useEffect} from "react";
import Header from "../components/header";
import Main from "../components/main";
import "./style.css";
import zoom from "../assets/images/zoom.png";
import API from "../utils/API";
import Book from "../components/book";


const Search = ()=>{
    const [searchedBook, setSearch]  = useState("");
    const [title, setTitle] = useState(""); 
    const [img, setImg] = useState("");
    const [alt, setAlt] = useState("");
    const [authors, setAuthors] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState ("");
    const [err, setErr] = useState();


    const handleClick = e =>{
        e.preventDefault();
    }

    const setData = (data) => {
        console.log("DATA ", data.items)
        data.items.forEach(element=>{
            setTitle(element.volumeInfo.title);
            setAuthors(element.volumeInfo.authors);
            setDescription( element.volumeInfo.description);
            setImg(element.volumeInfo.imageLinks.smallThumbnail);
            setAlt(element.volumeInfo.title+"-img");
            setLink(element.selfLink);
   

        })
        console.log("TITLE IS ", title);
        console.log("DESCRIPTION IS ", description);
        console.log("AUTHORS ", authors);
        console.log("IMG ", img);
        console.log ("ALT ", alt);
        console.log("LINK ", link);
       
        
    }

    useEffect( ()=>{
        API.searchBook(searchedBook).then(res=>{
            if (res.data.length === 0) {
                throw new Error("No results found.");
              }
              if (res.data.status === "error") {
                throw new Error(res.data.message);
              }
              setData(res.data);
             
        }).catch(err => setErr(err));
        
    }, [searchedBook]);

   

    return(
        <div>
            <Header />
            <form>
            <input type="text" onChange={event=>{
                setSearch(event.target.value)    
            }
            }/>
            <img src={zoom} alt="zoom-icon" id="zoom-icon" type="submit" onClick={handleClick}/>
            </form>
            <Main>
                <Book title={title} url={img} alt={alt} authors={authors} description={description} link={link}/>

            </Main>
            
            </div>
            
    )
}

export default Search;