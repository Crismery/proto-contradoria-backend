module.exports = (sequelize4, Sequelize) => {

    const mantenimiento = sequelize4.define("mantenimiento", {
        
        Serial: {
            type: Sequelize.STRING,
            allownull: false,
        },
        TipoM: {
            type: Sequelize.STRING
        },
        COS: {
            type: Sequelize.STRING
        },
        Actualizcion: {
            type: Sequelize.STRING
        },
        Descripcion: {
            type: Sequelize.STRING
        },
        Defrag: {
            type: Sequelize.STRING
        },
        Memory: {
            type: Sequelize.STRING,
        },
        Memoria: {
            type: Sequelize.STRING
        },
        Storage: {
            type: Sequelize.STRING
        },
        Almacenamiento: {
            type: Sequelize.STRING
        },
        Type: {
            type: Sequelize.STRING
        },
        Cleaning: {
            type: Sequelize.STRING
        },
        Fecha: {
            allownull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        
    });

    return mantenimiento;
};