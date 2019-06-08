const router = require("express").Router();

const savedBooksRoutes = require("./saved-books.js");
const searchedBooksRoutes = require("./searched-books.js");

router.use("/saved", savedBooksRoutes);
router.use("/search", searchedBooksRoutes);

module.exports = router;
