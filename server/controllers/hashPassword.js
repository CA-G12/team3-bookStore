const bcrypt = require("bcryptjs");
const { addUserQueries } = require("../database/queries");

const hashController = (req, res) => {
  const { email, password, username, imgurl, usertype } = req.body;

  bcrypt.hash(password, 10, function (err, hash) {
    addUserQueries({ email, hash, username, imgurl, usertype }).then((data) => {
      res.redirect('/');
    });
  });
};
module.exports = hashController;
