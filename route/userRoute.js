const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middleware/jwtMiddleware')
const {createUser,login,getUser}= require('../controller/userControllers')

router.post('/createUser',createUser)
router.post('/login',login)
router.get('/getUser',verifyToken,getUser)
module.exports = router;