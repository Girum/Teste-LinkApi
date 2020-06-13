const insereDB = require('../services/insereDB')
const getDB = require('../services/getDB')

exports.insere = async function (req, res) {
    await insereDB.insere((erro) => {
        if(erro){
            return res.send({ Status: "Erro", erro: erro})
        }
        
    })
    res.send({ Status: "OK", message:"Oportunidade(s) inserida(s) com sucesso!"})
}

exports.getDBOportunidades = async function (req, res) {
    await getDB.getOportunidadesDB((erro, oportunidades) => {
        if(erro){
            return res.send({ Status: "Erro", erro: erro})
        }
        res.send({ Status: "OK", dados: oportunidades})
    })
    
}