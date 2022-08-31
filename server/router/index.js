const router = require("express").Router();
const {
  hashController,
  verifyLogin,
  checkLoggedUser,
  logout,
  getCartController,
  addBooksFromForm,
  addBooksRouter
} = require("../controllers");

router.get("/checkLoggedUser", checkLoggedUser);
router.get("/logout", logout);
router.post("/addUser", hashController);
router.post("/login", verifyLogin);
router.post("/addBooks",addBooksFromForm);
router.get("/addBooks",addBooksRouter);

module.exports = router;
