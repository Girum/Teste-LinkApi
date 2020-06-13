const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OportunidadesSchema = new Schema({

    nomeCliente: { type: String, max: 30},
    numeroPedido: { type: Number },
    valorTotal: { type: String},
    data: { type: Date},


    
});
module.exports = mongoose.model('oportunidades', OportunidadesSchema);