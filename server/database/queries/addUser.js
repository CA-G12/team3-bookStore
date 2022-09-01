const connection = require("../config/connection")

const addUserQueries = ({email , hash , username, imgurl }) =>{
    return connection.query('INSERT INTO users (email , password , username, imgurl ) VALUES ($1,$2,$3,$4) RETURNING * '
    ,[email , hash , username, imgurl ])
}

module.exports = addUserQueries;