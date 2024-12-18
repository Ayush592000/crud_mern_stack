const express = require('express')
const { storeUserData, fetchData, singleUser, updatedUser, deleteUser } = require('../controller/user')
const router = express.Router()

router.post('/signin', storeUserData)
router.get('/read', fetchData)
router.get('/singleUser/:id', singleUser)
router.put('/edit/:id', updatedUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router