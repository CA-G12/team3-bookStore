const jwt = require('jsonwebtoken')
const { getCartQueries } = require('../database/queries')

require('dotenv').config()
const getCartController = (req, res) => {
    const token = req.cookies.loggedUser
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if(err) return res.send(err)
        getCartQueries(decoded.id).then(result => 
            res.send(result.rows)
        )
      });
}
module.exports = getCartController