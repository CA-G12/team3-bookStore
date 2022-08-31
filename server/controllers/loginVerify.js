const jwt = require("jsonwebtoken");
const { checkLogin } = require("../database/queries");
const bcrypt = require("bcryptjs");
const Joi = require("joi");


require("dotenv").config();

const verifyLogin = (req, res) => {
  
   const schema = Joi.object({
     email: Joi.string().email().required(),
     password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(6).required()
   })
  
  const value = schema.validate(req.body);
  if(value.error){
    res.send(value.error.details[0].message);
  } else {
    const inputPassword = req.body["password"];
  checkLogin(req.body).then((data) => {
    if (data.rows.length > 0) {
      const user = data.rows[0];
      bcrypt.compare(inputPassword, user.password, (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          if (!result) {
            res.send("wrong password");
          } else {
            jwt.sign(
              user,
              process.env.SECRET_KEY,
              { algorithm: "HS256" },
              (err, encoded) => {
                if (err) {
                  console.log(err);
                  res.sendStatus(500);
                } else {
                  res.cookie("loggedUser", encoded).redirect("/");
                }
              }
            );
          }
        }
      });
    } else {
      res.send("User Not Found");
    }
  });
  }
  
};

module.exports = verifyLogin;
