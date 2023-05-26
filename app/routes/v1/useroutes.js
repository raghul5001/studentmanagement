const express = require('express')
const router = express.Router()

const {register,login} = require("../../controllers/register")
const {userRegister,userLogin} =require("../../validator/uservalid")

router.post('/register',userRegister,register)
router.post('/login',userLogin,login)


module.exports = router;