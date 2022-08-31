const connection = require("../config/connection");

const getAllBooksQuery = () => {
  return connection.query("select * from books");
};
module.exports = getAllBooksQuery;
