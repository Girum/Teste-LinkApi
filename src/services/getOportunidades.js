const lib = require('pipedrive')
lib.Configuration.apiToken = '2220f689789f0031070eb2fa4ce0162e8007757b'

var dealsController = lib.DealsController;

exports.getAllDeals = async function(userId, callback){
    var input = []
    input['userId'] = userId

    await dealsController.getAllDeals(input, function(error, response){
        return callback(error, response.data)
    })
}
