const connection = require("../config/connection")

const addBooks = ({book_name , imgUrl , price, details}) =>{
    return connection.query('INSERT INTO books (book_name , imgUrl , price, details) VALUES ($1,$2,$3,$4)'
    ,[book_name , imgUrl , price, details])
}


module.exports = addBooks;