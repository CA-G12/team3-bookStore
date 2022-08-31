const { join } = require("path");
const cartPage = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "pages", "cart.html"));
};
module.exports = cartPage;
