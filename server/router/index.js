const router = require("express").Router();
const { hashController, verifyLogin } = require("../controllers");

router.post("/addUser", hashController);
router.post("/login", verifyLogin);

module.exports = router;
