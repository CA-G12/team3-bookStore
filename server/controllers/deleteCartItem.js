const { deleteCartItemQuery } = require("../database/queries");

const deleteCartItem = (req, res) => {
  deleteCartItemQuery(req.params.id).then((data) => res.redirect("/cartPage"));
};
module.exports = deleteCartItem;
