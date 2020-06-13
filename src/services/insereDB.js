const axios = require('axios')
const BlingApiKey = '362d10be7e6e448705bac277312d34f81d8f3b4f6848bfca0d51251f869735477f7d0c77'
const Oportunidades = require('../models/oportunidade.model')

exports.insere = async function(callback){

    await axios.get(`https://bling.com.br/Api/v2/pedidos/json&apikey=${BlingApiKey}`)
        .then( (result) => {
            result.data.retorno.pedidos.forEach(async (orders) => {

                var oportunidade = new Oportunidades({
                    nomeCliente: orders.pedido.cliente.nome,
                    numeroPedido: orders.pedido.numero,
                    valorTotal: orders.pedido.totalvenda,
                    data: orders.pedido.data
                })

                await Oportunidades.findOne({ numeroPedido: orders.pedido.numero})
                    .then(async (result) => {
                        if(result != null){
                            console.log(`Pedido numero ${orders.pedido.numero} já está registrado no sistema!`)
                        } else {
                            await oportunidade.save( (err) => {
                                if(err){
                                    return callback(err.message)
                                }
                            })
                        }
                    }).catch((erroFind) => {
                        return callback(erroFind.message)
                    })     
            })
        }).catch((error) => {
            console.log(error)
            return callback(error)
        })    
}