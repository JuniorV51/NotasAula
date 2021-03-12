
module.exports = (sequelize, DataTypes) =>{
    const Usuario = sequelize.define(
        'Usuario', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          senha: {
            type: DataTypes.STRING,
            allowNull: false
          },
          avatar: {
            type: DataTypes.STRING,
            allowNull: true
          }
    },
     {
         table: 'usuario',
         timestamps: false,
    }
  );

    return Usuario;
}