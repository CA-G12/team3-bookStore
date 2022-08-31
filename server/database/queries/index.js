const addUserQueries = require('./addUser')
const getCartQueries = require('./getCart')
const checkLogin = require('./loginQuery')
const addBooks = require('./addBooks');
module.exports = {
    addUserQueries,checkLogin,
    getCartQueries,addBooks
};