const connection = require("../config/connection");

const getCartQueries = (id)=>{
    return connection.query(`SELECT * From books join carts on  books.id = carts.bookId  where carts.userId = $1 `,[id] )
}
module.exports = getCartQueries