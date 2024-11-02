const express = require('express')
const router = express.Router()

router.use('/', require('./todolist-route'))

module.exports = router;