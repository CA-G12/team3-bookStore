const addUserQueries = require('./addUser')
const getCartQueries = require('./getCart')
const checkLogin = require('./loginQuery')
const addBooks = require('./addBooks');

const getAllBooksQuery = require("./getAllBooksQuery");
const addToCartQuery = require("./addToCartQuery");
const deleteCartItemQuery = require("./deleteCartItemQuery");

module.exports = {
  addUserQueries,
  checkLogin,
  getCartQueries,
  getAllBooksQuery,
  addToCartQuery,
  deleteCartItemQuery,
  addBooks
};
