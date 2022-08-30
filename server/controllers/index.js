const  jwt  = require("jsonwebtoken");
const checkLogin = require("../database/queries/loginQuery");
require('dotenv').config();

const verifyLogin = (req, res) => {
    checkLogin(req.body).then(data => {
        if(data.rows.length > 0){
           const user = data.rows[0];
           jwt.sign(user, process.env.secretkey, {algorithm : "HS256"},(err, encoded) => {
               if(err){
                   res.sendStatus(500);
               }else{
               res.cookie('loggedUser', encoded).redirect('/');
           }})
        }else{
            res.send('User Not Found');
        }
    });
}

module.exports = verifyLogin;