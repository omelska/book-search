const router = require("express").Router();
const axios = require("axios");

router.use((req, res, next) => {
  console.log("here");
  next();
});

router.get("/:title", (req, res) => {
  const url3 = `https://www.googleapis.com/books/v1/volumes?q=${
    req.params.title
  }`;

  axios
    .get(url3)
    .then(results => {
      console.log("RESULTS\n", results.data.items);
      res.json(results.data.items);
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
