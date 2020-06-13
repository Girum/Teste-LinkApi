const express = require('express');
const router = express.Router();

const DBController = require('../controllers/DB.controller')

router.get('/inseredb', DBController.insere)
router.get('/getoportunidades', DBController.getDBOportunidades)

module.exports = router