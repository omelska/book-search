import React, { useState, useEffect, useContext, useCallback } from "react";
import Header from "../components/header";
import Main from "../components/main";
import "./style.css";
import zoom from "../assets/images/zoom.png";
import API from "../utils/API";
import Book from "../components/book";
import globalContext from "../components/context";
import GlobalContext from "../components/context";
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
    data.items.forEach(element => {
      setBooks([
        ...books,
        {
          title: element.volumeInfo.title,
          authors: element.volumeInfo.authors,
          description: element.volumeInfo.description,
          img: element.volumeInfo.imageLinks.smallThumbnail,
          alt: element.volumeInfo.title + "-img",
          link: element.selfLink
        }
      ]);
    });
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
      })
      .catch(err => setErr(err));

    setClick(false);
  }, [isClicked, books]);

  return (
    <div>
      <Header />
      <form onSubmit={handleClick}>
        <input type="text" onChange={event => setSearch(event.target.value)} />
        <img
          src={zoom}
          alt="zoom-icon"
          id="zoom-icon"
          type="submit"
          onClick={() => setClick(true)}
        />
      </form>
      <Main value={GlobalContext}>
        {books.map(book => (
          <Book
            key={book.link}
            title={book.title}
            url={book.img}
            alt={book.alt}
            authors={book.authors}
            description={book.description}
            link={book.link}
          >
            <SaveBtn onClick={event => handleClick(book)} />
          </Book>
        ))}
      </Main>
    </div>
  );
};

export default Search;
