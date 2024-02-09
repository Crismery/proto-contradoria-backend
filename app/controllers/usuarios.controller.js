const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const usuarios = {
        Usuario: req.body.Usuario,
        ID_Usuario: req.body.ID_Usuario,
        Departamento: req.body.Departamento
       
    };

    Usuarios.create(usuarios)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Hubo algun error creando el test."
            });
        });
};


exports.findAll = (req, res) => { 
    const ID_Usuario = req.query.ID_Usuario;
    var condition = ID_Usuario ? { ID_Usuario: { [Op.like]: `%${ID_Usuario}%` } } : null;

    Usuarios.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sucedio algun error buscando tests."
            });
        });
};

exports.findOne = (req, res) => {
    const ID_Usuario = req.params.ID_Usuario;

    Usuarios.findbyOne(ID_Usuario)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontro el id de usuario=${ID_Usuario}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error encontrando el serial=" + ID_Usuario
            });
        });
};

exports.update = (req, res) => {
    const ID_Usuario = req.params.ID_Usuario;

    Usuarios.update(req.body, {
        where: { ID_Usuario: ID_Usuario }
    })
        .then(data => {
            if (data) {
                res.send({
                    message: "Test actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualiza el dispositivo con serial=${ID_Usuario}. Quizas no existe o no se ingresaron los nuevos datos`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actuallizando el test con serial=" + ID_Usuario
            });
        });
};

exports.delete = (req, res) => {
    const ID_Usuario = req.params.ID_Usuario;

    Usuarios.destroy({
        where: { ID_Usuario: ID_Usuario }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Test eliminado satisfactoriamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el test con serial=${ID_Usuario}. Quizas no se encontro.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el test=" + ID_Usuario
            });
        });
};

exports.deleteAll = (req, res) => {
    Usuarios.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} fueron eliminados` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio algun error al eliminar los tests."
            });
        });
};

exports.findAndCountAll = (req, res) => {
    const ID_Usuario = req.params.ID_Usuario;
    var condition = ID_Usuario ? { ID_Usuario: { [Op.like]: `%${ID_Usuario}%` } } : null;

    Usuarios.findAndCountAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sucedio algun error buscando tests."
            });
        });
}

exports.findAllWhere = (req, res) => {

    const Departamento= req.params.Departamento;
    

    Usuarios.findAll({ where: { Departamento: `%${Departamento}%` } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sucedio algun error buscando tests."
            });
        });

};

exports.findAllWhereU = (req, res) => {
    const Usuario = req.params.Usuario;
    Usuarios.findAll({ where: { Usuario: `%${Usuario}%` } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sucedio algun error buscando tests."
            });
        });

};