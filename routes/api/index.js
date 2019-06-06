const router = require("express").Router();

const savedBooksRoutes = require("./saved-books.js");
const searchedBooksRoutes = require("./searched-books.js");

router.use("/saved-books", savedBooksRoutes);
router.use("/search-books", searchedBooksRoutes);

module.exports = router;
