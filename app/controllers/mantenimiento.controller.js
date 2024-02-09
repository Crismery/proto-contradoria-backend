const db = require("../models");

const Mantenimiento = db.mantenimiento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const mantenimiento = {
    Serial: req.body.Serial,
    TipoM: req.body.TipoM,
    COS: req.body.COS,
    Actualizacion: req.body.Actualizacion,
    Descripcion: req.body.Descripcion,
    Defrag: req.body.Defrag,
    Memory: req.body.Memory,
    Memoria: req.body.Memoria,
    Storage: req.body.Storage,
    Almacenamiento: req.body.Almacenamiento,
    Type: req.body.Type,
    Cleaning: req.body.Cleaning,

  };


  Mantenimiento.create(mantenimiento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Hubo algun error creando el Mantenimiento."
      });
    });
    
};

exports.get = (req, res) => {
  Mantenimiento.findAll()
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
