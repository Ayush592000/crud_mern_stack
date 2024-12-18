const express = require('express')
const { storeUserData } = require('../controller/user')
const router = express.Router()

router.post('/signin', storeUserData)


module.exports = router