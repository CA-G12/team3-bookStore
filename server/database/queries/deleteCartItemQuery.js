const connection = require("../config/connection");

const deleteCartItemQuery = (id) => {
  return connection.query("delete from carts where id =$1", [id]);
};
module.exports = deleteCartItemQuery;
