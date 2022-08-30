const connection = require("../config/connection")

const addUserQueries = ({email , hash , username, imgurl , usertype}) =>{
    return connection.query('INSERT INTO users (email , password , username, imgurl , usertype) VALUES ($1,$2,$3,$4,$5) RETURNING * '
    ,[email , hash , username, imgurl , usertype])
}

module.exports = addUserQueries;