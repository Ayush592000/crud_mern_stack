const express = require('express')
const { storeUserData, fetchData, singleUser, updatedUser } = require('../controller/user')
const router = express.Router()

router.post('/signin', storeUserData)
router.get('/read', fetchData)
router.get('/singleUser/:id', singleUser)
router.put('/edit/:id', updatedUser)


module.exports = router