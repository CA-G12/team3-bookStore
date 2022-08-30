const connection = require("../config/connection");

const checkLogin = ({ email, password }) => {
    const sql = {
        text: "select * from users where email=$1 AND password = $2",
        values: [email, password],
      };
      return connection.query(sql);
}

module.exports = checkLogin;