const axios = require('axios')
const BlingApiKey = '362d10be7e6e448705bac277312d34f81d8f3b4f6848bfca0d51251f869735477f7d0c77'

exports.cadPedido = async function (pedidos, callback){

    var pedidoXML1 = `<pedido> <cliente> <nome>Fulano de Tal</nome> <email>fulano.detal@tal.com</email> <itens>`
    var pedidoXML2 = `</itens> </cliente> </pedido>`

    const pedidoXML = pedidoXML1.concat(pedidos, pedidoXML2)

    await axios.post(`https://bling.com.br/Api/v2/pedido/json/&apikey=${BlingApiKey}&xml=${pedidoXML}`, {})
        .then((result) => {
            return callback(null, result.data)
        }).catch((error) => {
            console.log(error)
            return callback(error, null)
        })

}

