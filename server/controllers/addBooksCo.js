const { addBooks } = require("../database/queries");



const addBooksFromForm = (req,res)=>{
    console.log(req.body, "hello")
    const {book_name , imgUrl , price, details} = req.body; 

    addBooks({book_name , imgUrl , price, details})
    .then((data)=> {
        console.log(data);
        res.redirect('/');
    })
    .catch((err)=> console.log(err));
}


module.exports = addBooksFromForm;
