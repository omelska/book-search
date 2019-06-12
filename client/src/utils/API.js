import axios from "axios";

export default {
  searchBook: (book) =>{
      console.log(book);
      const searchedBook = book.split(' ').join('+');
      console.log("Searched Book ", searchedBook);
          return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchedBook}`
    );
  }
};
