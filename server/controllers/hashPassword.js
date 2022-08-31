const bcrypt = require("bcryptjs");
const { addUserQueries } = require("../database/queries");
const signupValidation = require("./signupValidation");

const hashController = (req, res) => {
    const validValue = signupValidation(req)
    if(validValue.error){
        res.send({msg:validValue.error.message})
    }else{
        const { email, password, username, imgurl, usertype } = req.body;
      bcrypt.hash(password, 10, function (err, hash) {
        addUserQueries({ email, hash, username, imgurl, usertype }).then((data) => {
          res.send({succes:'success'});
        });
      });
    }
};
module.exports = hashController;
