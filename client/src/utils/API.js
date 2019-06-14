import axios from "axios";
import { fstat } from "fs";
import { rejects } from "assert";

export default {
  searchBook: book => {
    console.log(book);
    const searchedBook = book.split(" ").join("+");
    console.log("Searched Book ", searchedBook);
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchedBook}`
    );
  }
};
