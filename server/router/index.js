const router = require("express").Router();
const { join } = require("path");
const {
  hashController,
  verifyLogin,
  checkLoggedUser,
  logout,
  getCartController,
  addBooksFromForm,
  addBooksRouter,
  getAllBooks,
  addToCart,
  deleteCartItem,
  cartPage,
} = require("../controllers");
const isLogged = require("../middlewares/isLogged");

router.get("/checkLoggedUser", checkLoggedUser);
router.get("/logout", logout);
router.post("/addUser", hashController);
router.post("/login", verifyLogin);
router.post("/addBooks",addBooksFromForm);
router.get("/addBooks",addBooksRouter);
router.post("/addToCart", addToCart);
router.get("/cart", getCartController);
router.get("/cartPage", isLogged, cartPage);
router.get("/getAllBooks", getAllBooks);
router.get("/deleteCartItem/:id", deleteCartItem);
module.exports = router;
