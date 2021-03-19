const Sequelize = require('sequelize');
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
  });

  Usuario.associate = function (models){
    this.hasMany(models.Nota,{
      foreigKey: 'usuarioId',
    });
  };
  return Usuario;
};


