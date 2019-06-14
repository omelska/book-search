import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import Book from "../components/book";
import DeleteBtn from "../components/deleteBtn";
import Main from "../components/main";

const Saved = () => {
  const [books, setBooks] = useState([]);
  const [err, setErr] = useState();

  const getData = () => {
    axios
      .get("/api/saved/books")
      .then(res => {
        if (res.length === 0) {
          throw new Error("No results found.");
        }
        if (res.status === "error") {
          throw new Error(res.data.message);
        }
        setData(res.data);
      })
      .catch(err => setErr(err));
  };

  const handleClick = e => {
    axios
      .delete(`/api/saved/delete/${e._id}`)
      .then(res => {
        console.log(res);
        getData();
      })
      .catch(err => setErr(err));
  };

  const setData = data => {
    console.log("DATA ", data);

    const savedBooksArr = data.map(element => {
      return {
        _id: element._id,
        title: element.title,
        authors: element.authors,
        description: element.description,
        img: element.image,
        alt: element.title + "-img",
        link: element.link
      };
    });
    setBooks(savedBooksArr);
  };

  useEffect(() => {
    getData();
  }, [err]);

  return (
    <div>
      <Header />
      <Main>
        {books.map(book => (
          <Book
            key={book._id}
            title={book.title}
            url={book.img}
            alt={book.alt}
            authors={book.authors}
            description={book.description}
            link={book.link}
          >
            <DeleteBtn onClick={() => handleClick(book)} />
          </Book>
        ))}
      </Main>
    </div>
  );
};

export default Saved;
