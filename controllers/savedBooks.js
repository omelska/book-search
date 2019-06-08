const db = require("../models/savedBooks.js");

module.exports = {
  findAll: (req, res) => {
    db.Book.find({})
      .sort(1)
      .then(results => {
        res.json(results);
        console.log("Connected inside findAll\n", db.Book);
      })
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then(results => {
        res.json(results);
        console.log("inside create \n", db.Book);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Book.findByIdAndRemove({ _id: req.params.id })
      .then(book => {
        res.json(book);
        console.log("successfully removed", book);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
