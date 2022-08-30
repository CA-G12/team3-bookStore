const bcrypt = require("bcryptjs");
const addUserController = require("./addUser");

const hashController = (req, res) => {
    const {email , password , username, imgurl , usertype} = req.body

  bcrypt.hash(password, 10,function (err, hash) {
    addUserController({email , hash , username, imgurl , usertype})
  });
};
module.exports = hashController