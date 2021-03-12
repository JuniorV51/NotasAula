module.exports = (sequelize, DataTypes) => {
    const Nota = sequelize.define(
        'Nota', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

         },
     });
};