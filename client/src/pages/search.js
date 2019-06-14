import React, { useState, useEffect, useContext, useCallback } from "react";
import Header from "../components/header";
import Main from "../components/main";
import "./style.css";
import zoom from "../assets/images/zoom.png";
import API from "../utils/API";
import Book from "../components/book";
import SaveBtn from "../components/saveBtn";
import axios from "axios";

const Search = () => {
  const [searchedBook, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [isClicked, setClick] = useState(false);
  const [err, setErr] = useState();

  const handleClick = e => {
    console.log("CLICKED");
    let obj = {
      title: e.title,
      authors: e.authors.toString(),
      description: e.description,
      image: e.img,
      link: e.link
    };
    console.log("Book that was clicked ", obj);
    axios
      .post("/api/saved/books", obj)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  const setData = data => {
    console.log("DATA ", data.items);
    console.log("BOOKS", books);
    const booksArr = data.items.map(element => {
      return {
        id: element.id,
        title: element.volumeInfo.title,
        authors: element.volumeInfo.authors,
        description: element.volumeInfo.description,
        img: element.volumeInfo.imageLinks.smallThumbnail,
        alt: element.volumeInfo.title + "-img",
        link: element.volumeInfo.infoLink
      };
    });
    setBooks(booksArr);
  };

  useEffect(() => {
    API.searchBook(searchedBook)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setData(res.data);
        console.log("BOOKS inside useEffect", books);
      })
      .catch(err => setErr(err));

    setClick(false);
  }, [isClicked]);

  return (
    <div>
      <Header />
      <div className="form">
        <input
          type="text"
          onChange={event => setSearch(event.target.value)}
          onKeyPress={event => {
            console.log("EVENT ", event.key);
            if (event.key === "Enter") {
              setClick(true);
            }
            return false;
          }}
        />
        <img
          src={zoom}
          alt="zoom-icon"
          id="zoom-icon"
          onClick={() => setClick(true)}
        />
      </div>
      <Main>
        {books.map(book => (
          <Book
            key={book.id + book}
            title={book.title}
            url={book.img}
            alt={book.alt}
            authors={book.authors}
            description={book.description}
            link={book.link}
          >
            <SaveBtn onClick={() => handleClick(book)} />
          </Book>
        ))}
      </Main>
    </div>
  );
};

export default Search;
