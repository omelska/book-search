console.log("iside saved books route");
const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooks.js");

router
  .route("/books")
  .get(savedBooksController.findAll)
  .post(savedBooksController.create);

router.route("/delete/:id").delete(savedBooksController.remove);

module.exports = router;
