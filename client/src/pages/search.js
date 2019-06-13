import React, {useState, useEffect, useContext, useCallback} from "react";
import Header from "../components/header";
import Main from "../components/main";
import "./style.css";
import zoom from "../assets/images/zoom.png";
import API from "../utils/API";
import Book from "../components/book";
import globalContext from "../components/context"
import GlobalContext from "../components/context";
import SaveBtn from "../components/saveBtn";


const Search = ()=>{
    const [searchedBook, setSearch]  = useState("");
    const [books, setBooks] = useState([]);
    const [err, setErr] = useState();
 

    const handleClick = e =>{
        e.preventDefault();
    }

    const setData = (data) => {
        console.log("DATA ", data.items)
        data.items.forEach(element=>{
            setBooks([...books, {
                title: element.volumeInfo.title,
                authors: element.volumeInfo.authors,
                description: element.volumeInfo.description,
                img: element.volumeInfo.imageLinks.smallThumbnail,
                alt: element.volumeInfo.title+"-img",
                link: element.selfLink
            }])
        })     
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
            <Header/>
            <form onSubmit={handleClick}>
            <input type="text" onChange={event=> setSearch(event.target.value)}/>
            <img src={zoom} alt="zoom-icon" id="zoom-icon" type="submit" onClick={event=>{setSearch(event.target.value)}}/>
            </form>
            <Main value={GlobalContext}>
                {books.map(book=>(
                    <Book title={book.title} url={book.img} alt={book.alt} authors={book.authors} description={book.description} link={book.link}>
                        <SaveBtn />
                    </Book>
                ))}
                
        
            </Main>
            
            </div>
            
    )
}

export default Search;