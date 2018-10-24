const express = require('express');
const router = express.Router();

const {
    home,
    login,
    logout
} = require('../controllers/home.controller')()

/* GET home page. */
router.get('/', home);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;