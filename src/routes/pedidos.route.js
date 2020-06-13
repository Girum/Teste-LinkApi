const express = require('express');
const router = express.Router();

const cadPedidosController = require('../controllers/cadPedidos.controller')

router.get('/pedidos', cadPedidosController.cadPedidos)

module.exports = router