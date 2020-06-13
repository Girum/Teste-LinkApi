const Oportunidades = require('../models/oportunidade.model')

exports.getOportunidadesDB = async function(callback){
    
    await Oportunidades.find()
        .then(async (result) => {
            if(result.length == []){
                return callback(null, "Não há oportunidades registradas no banco de dados!")
            }
            else {
                return callback(null, result)
            }
        }).catch((erroFind) => {
            return callback(erroFind.message, null)
        })     
}