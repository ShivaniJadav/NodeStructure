const { Router } = require('express');
const { addUser, getAllUsers } = require('../controllers/userController');

var router = Router()

router.route('/')
    .get(getAllUsers)
    .post(addUser)

module.exports = router;