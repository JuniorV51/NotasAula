const { Sequelize } = require ('sequelize');
const database = {};

const options = {

    username:'postgres',
    password:'26062001',
    database:'notas',
    host:'localhost',
    dialect:'postgrs',
};

const sequelize = new Sequelize(options);

sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.databse} realizada com sucesso`))
    .catch((error)=> console.log(`Falha ai conectar ao banco ${options.database}: ${error}`));


database.sequelize = sequelize;


module.exports = database;