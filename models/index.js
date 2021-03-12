const { Sequelize, DataTypes } = require ('sequelize');
const _Usuario = require ('./usuario')
const database = {};

const options = {

    username:'postgres',
    password:'26062001',
    database:'notas',
    host:'localhost',
    dialect:'postgres',
};

const sequelize = new Sequelize(options);

let Usuario = _Usuario(sequelize, DataTypes);



sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.databse} realizada com sucesso`))
    .catch((error)=> console.log(`Falha ai conectar ao banco ${options.database}: ${error}`));


database.sequelize = sequelize;


module.exports = database;