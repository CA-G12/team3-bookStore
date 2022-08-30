const jwt = require("jsonwebtoken");
const { checkLogin } = require("../database/queries");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const verifyLogin = (req, res) => {
  const inputPassword = req.body["password"];
  checkLogin(req.body).then((data) => {
    if (data.rows.length > 0) {
      const user = data.rows[0];
      bcrypt.compare(inputPassword, user.password, (err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          if (!result) {
            res.send("wrong password");
          } else {
            jwt.sign(
              user,
              process.env.secretkey,
              { algorithm: "HS256" },
              (err, encoded) => {
                if (err) {
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
};
module.exports = verifyLogin;
