const { addUserQueries } = require("../database/queries")


const addUserController = ({email , hash , username, imgurl , usertype}) => {
    
    addUserQueries({email , hash , username, imgurl , usertype}).then(data => {
        console.log(data);
    })
}

module.exports = addUserController