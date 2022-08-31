const connection = require("../config/connection");

const addToCartQuery = ({ userId, bookId }) => {
  return connection.query("insert into carts(userId,bookId) values($1,$2)", [
    userId,
    bookId,
  ]);
};

module.exports = addToCartQuery;
