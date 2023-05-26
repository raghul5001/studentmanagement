const joi = require("joi")

const register = joi.object({
    userName:joi.string().required().min(3).max(20),
    email:joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    phoneNumber:joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password:joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$')).required()
})

const userRegister = async(req, res, next) => {
    try {
        await register.validateAsync({...req.body }, { abortEarly: false })
        next()
    } catch (err) {
        err.status = res.status(400).json({ status: 400, message: err.message || err })
    }
}
const login = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    password:joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$')).required()
})

const userLogin = async(req, res, next) => {
    try {
        await login.validateAsync({...req.body }, { abortEarly: false })
        next()
    } catch (err) {
        err.status = res.status(400).json({ status: 400, message: err.message || err })
    }
}
    module.exports={userRegister,userLogin};