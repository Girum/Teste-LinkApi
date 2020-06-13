const axios = require('axios')
const BlingApiKey = '362d10be7e6e448705bac277312d34f81d8f3b4f6848bfca0d51251f869735477f7d0c77'

exports.cadProduto = async function(data, callback){

    var produtos = []
    var produtosXML = ``

    data.forEach(async deal => {
        let id = deal.id
        let orgName = deal.org_name
        let value = deal.value

        const produto = {
            id: id,
            orgName: orgName,
            value: value
        }
        produtos.push(produto)
        const item = `<item> <codigo>${id}</codigo> <descricao>${orgName}</descricao> <qtde>1.00</qtde> <vlr_unit>${value}</vlr_unit></item>`
        produtosXML = produtosXML.concat(item)

        const produtoXML = `<produto> <codigo>${id}</codigo> <descricao>${orgName}</descricao> </produto>`

        await axios.post(`https://bling.com.br/Api/v2/produto/json/&apikey=${BlingApiKey}&xml=${produtoXML}`, {})
            .then(async () => {

            }).catch((error) => {
                return callback(error, null)
            }) 
    })
    return callback(null, produtosXML)
}