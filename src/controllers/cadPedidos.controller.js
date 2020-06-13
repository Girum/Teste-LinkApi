const getOportunidades = require('../services/getOportunidades')
const cadProdutos = require('../services/cadProdutos')
const cadPedidos = require('../services/cadPedidos')

exports.cadPedidos = async function (req, res) {
    var userId = 11567321

    await getOportunidades.getAllDeals(userId, async (error, response) => {
        if(error != null){
            return res.send({ Status: "Erro", erro: error})
        }
        
        var responseData = response
        await cadProdutos.cadProduto(responseData, async (error, produtosPedidos) => {
            if(error){
                return res.send({ Status: "Erro", erro: error})
            }
            await cadPedidos.cadPedido(produtosPedidos, (error, result) => {
                if(error){
                    return res.send({ Status: "Erro", erri: error})
                }
                res.send(result)
            })
        })
    })
}