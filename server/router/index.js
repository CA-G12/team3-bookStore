const router = require('express').Router();
const {addUserController, verifyLogin} = require('../controllers')

router.post('/addUser', addUserController)
router.post('/login', verifyLogin);
module.exports = router