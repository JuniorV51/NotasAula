const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../config/seguranca');
module.exports = function(sequelize, DataTypes) {
  const Usuario = sequelize.define('usuario', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    hooks: {
      beforeCreate: (usuario) => {
        usuario.senha = bcrypt.hashSync(usuario.senha, saltRounds);
      },
    },
    defaultScope: {
      attruibutes:{
        exclude: ['senha'],
      },
    },
    scopes: {
      login: {
      attributes: ['id', 'senha'],
    },
  },

  });

  Usuario.associate = function (models){
    this.hasMany(models.Nota,{
      foreigKey: 'usuarioId',
    });
  };
  return Usuario;
};


