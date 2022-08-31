const jwt = require("jsonwebtoken");
require("dotenv").config();
const checkLoggedUser = (req, res) => {
  if (!req.cookies["loggedUser"]) {
    res.send({ msg: "no logged user" });
  } else {
    jwt.verify(
      req.cookies["loggedUser"],
      process.env.SECRET_KEY,
      (err, decoded) => {
        if (err) {
          res.sendStatus(401);
        } else {
          res.send(decoded);
        }
      }
    );
  }
};
module.exports = checkLoggedUser;
