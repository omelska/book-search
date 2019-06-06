const router = require("express").Router();
const axios = require("axios");

router.use((req, res, next) => {
  console.log("here");
  next();
});

router.get("/:title", (req, res) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${
    req.params.title
  }=epub&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
  const url2 = `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=${
    process.env.GOOGLE_BOOKS_API_KEY
  }`;
  console.log("api key ", process.env.GOOGLE_BOOKS_API_KEY);

  axios
    .get(url2)
    .then(results => {
      console.log("RESULTS\n", results);
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
