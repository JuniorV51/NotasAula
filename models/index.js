const { Sequelize, DataTypes } = require ('sequelize');
const _Usuario = require ('./usuario');
const _Nota = require ('./nota');
const _Tag = require ('./tag');
const _Checklistt = require ('./checklist');
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
let Nota = _Nota(sequelize, DataTypes);
let Tag = _Tag(sequelize, DataTypes);
let Checklist = _Checklistt(sequelize,DataTypes);

database['Usuario'] = Usuario;
database['Nota'] = Nota;
database['Tag'] = Tag;
database['Checklist'] = Checklist;

console.log(database);
for (const key in database) {
    if(database[key].associate) database[key].associate(database);
}

Nota.findAll({
    include: [
        {
            model: Usuario,
        },
    ],
}).then((result) => console.log(result));





sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.databse} realizada com sucesso`))
    .catch((error)=> console.log(`Falha ai conectar ao banco ${options.database}: ${error}`));


database.sequelize = sequelize;


module.exports = database;