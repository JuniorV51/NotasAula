const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Tag = sequelize.define('tag', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    notaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nota',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tag',
    schema: 'public',
    timestamps: false,
  });

  return Tag;
};
