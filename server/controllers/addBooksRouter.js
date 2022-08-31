const path = require('path');


const addBooksRouter = (req, res) =>{
    res.sendFile(path.join(__dirname, '..','..','public','pages','addBooks.html'));
}

module.exports = addBooksRouter;