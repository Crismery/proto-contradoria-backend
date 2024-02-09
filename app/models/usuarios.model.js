module.exports = (sequelize3, Sequelize) => {
    const usuarios = sequelize3.define("Usuarios", {
        Usuario: {
            type: Sequelize.STRING
        },
        ID_Usuario: {
            type: Sequelize.STRING,
            unique: true
        },
        Departamento: {
            type: Sequelize.STRING
        }

    });
    return usuarios;

} 