const express = require('express')
const { storeUserData, fetchData } = require('../controller/user')
const router = express.Router()

router.post('/signin', storeUserData)
router.get('/read', fetchData)


module.exports = router