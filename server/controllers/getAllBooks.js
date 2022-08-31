const { getAllBooksQuery } = require("../database/queries");
const getAllBooks = (req, res) => {
  getAllBooksQuery().then((data) => res.send(data));
};
module.exports = getAllBooks;
