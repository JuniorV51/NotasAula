const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Checklist = sequelize.define('checklist', {
    id: {
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'checklist',
    schema: 'public',
    timestamps: false,
  });

  return Checklist;
};
