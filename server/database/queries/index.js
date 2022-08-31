const addUserQueries = require("./addUser");
const getCartQueries = require("./getCart");
const checkLogin = require("./loginQuery");
const getAllBooksQuery = require("./getAllBooksQuery");

module.exports = {
  addUserQueries,
  checkLogin,
  getCartQueries,
  getAllBooksQuery,
};
