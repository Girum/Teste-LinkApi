const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://linkapitest:linkapitest@iotgio-rubq3.mongodb.net/linkapitestdb?retryWrites=true'
const mongoDB =  dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true } );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.on('connected', () => {
    console.log('MongoDB conectado com sucesso!')
})

module.exports = mongoose;