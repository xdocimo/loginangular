const express = require('express');
const { login, register, getUser} = require('../controllers/products');
const router = express.Router();

router.post('/login', login)
router.post('/register', register)
router.post('/user', getUser)

module.exports = router;