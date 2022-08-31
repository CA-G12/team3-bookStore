const router = require("express").Router();
const {
  hashController,
  verifyLogin,
  checkLoggedUser,
  logout,
} = require("../controllers");

router.get("/checkLoggedUser", checkLoggedUser);
router.get("/logout", logout);
router.post("/addUser", hashController);
router.post("/login", verifyLogin);

module.exports = router;
