const { addBooks } = require("../database/queries");
const Joi =require('joi')

const addBooksFromForm = (req,res)=>{
    const addBookValidation = () => {
        const schema = Joi.object({
            book_name:Joi.string().required(),
            price:Joi.string().required(),
            details:Joi.string().required(),
            imgUrl:Joi.string().required()
        }) 
        const validateValue = schema.validate(req.body)
        return validateValue
    }
    const booleanValue = addBookValidation()
    
    if(!booleanValue.error){
        const {book_name , imgUrl , price, details} = req.body; 
    
        addBooks({book_name , imgUrl , price, details})
        .then((data)=> {
            console.log(data);
            res.redirect('/');
        })
        .catch((err)=> console.log(err));
    }
}


module.exports = addBooksFromForm;
