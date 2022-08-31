const router = require("express").Router();
const {
  hashController,
  verifyLogin,
  checkLoggedUser,
  logout,
  getCartController,
  getAllBooks,
} = require("../controllers");

router.get("/checkLoggedUser", checkLoggedUser);
router.get("/logout", logout);
router.post("/addUser", hashController);
router.post("/login", verifyLogin);
router.get("/cart", getCartController);
router.get("/getAllBooks", getAllBooks);
module.exports = router;
