const Temporal = require("sequelize-temporal")

module.exports = (sequelize2, Sequelize) => {

    const test = Temporal(sequelize2.define("test", {
        //paranoid: true,
        Dispositivo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Modelo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Nombre_Equipo: {
            type: Sequelize.STRING,
            unique: true,
        },
        Serial: {
            type: Sequelize.STRING,
            unique: true
        },
        Placa: {
            type: Sequelize.STRING,
            unique: true
        },
        BN: {
            type: Sequelize.STRING,
            unique: true
        },
        Usuario: {
            type: Sequelize.STRING
        },
        ID_Usuario: {
            type: Sequelize.STRING
        },
        Departamento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        OS: {
            type: Sequelize.STRING
        },
        Version: {
            type: Sequelize.STRING
        },
        CPU: {
            type: Sequelize.STRING
        },
        Memory: {
            type: Sequelize.STRING
        },
        Storage: {
            type: Sequelize.STRING
        },
        Type: {
            type: Sequelize.STRING
        },
        Size: {
            type: Sequelize.STRING
        },
        Mantenimiento: {
            type: Sequelize.STRING
        },
        Entrada: {
            allownull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }



    }), sequelize2);

    return test;
};