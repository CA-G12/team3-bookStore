const { addUserQueries } = require("../database/queries")


const addUserController = (req, res) => {
    console.log(req.body)
    const {email , password , username, imgurl , usertype} = req.body
    addUserQueries({email , password , username, imgurl , usertype}).then(data => {
        res.send(data)
    })
}

module.exports = addUserController