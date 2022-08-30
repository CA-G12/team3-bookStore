const Joi =require('joi')

const signupValidation = (req) => {
    const schema = Joi.object({
        username:Joi.string().required(),
        email:Joi.string().email(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        usertype:Joi.string().valid('user','admin').required(),
        imgurl:Joi.string()
    }) 
    const validateValue = schema.validate(req.body)
    return validateValue
}
// console.log(signupValidation())

module.exports = signupValidation