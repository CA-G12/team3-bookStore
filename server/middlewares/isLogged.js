const jwt = require("jsonwebtoken");
require("dotenv").config();
const isLogged = (req, res, next) => {
  if (!req.cookies["loggedUser"]) {
    res.redirect("/");
  } else {
    jwt.verify(
      req.cookies["loggedUser"],
      process.env.SECRET_KEY,
      (err, decoded) => {
        if (err) {
          res.sendStatus(401);
        } else {
          next();
        }
      }
    );
  }
};
module.exports = isLogged;
