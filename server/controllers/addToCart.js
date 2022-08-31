const jwt = require("jsonwebtoken");
const { addToCartQuery } = require("../database/queries");

const addToCart = (req, res) => {
  if (!req.cookies.loggedUser) {
    res.send({ msg: "not looged" });
  } else {
    const token = req.cookies.loggedUser;
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) return res.send(err);
      addToCartQuery({ userId: decoded.id, bookId: req.body.bookId });
    });
  }
};
module.exports = addToCart;
