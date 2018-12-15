const express = require('express')

const router = express.Router()

const { index } = require('../controllers/chat.controller')()


router.get('/:email', index)


module.exports = router