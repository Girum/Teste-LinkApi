const express = require('express')
const mongoose = require('./configDB/db')

const app = express()

const cadPedidosRoute = require('./routes/pedidos.route')
const DBRoute = require('./routes/db.route')

let port = process.env.PORT || 3887

app.use('/cadpedidos', cadPedidosRoute)
app.use('/db', DBRoute)

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`)
    
})