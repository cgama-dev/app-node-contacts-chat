const express = require('express');
const router = express.Router();

const { home, login } = require('../controllers/user.controller')()

/* GET home page. */
router.get('/', home);
router.get('/login', login);

module.exports = router;
