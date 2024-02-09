const db = require("../models");

const Test = db.test;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  /*if (!req.body.Dispositivo) {
      res.status(400).send ({
          message:"Se necesita un nombre de Dispositivo"
      });
      return;
  }
  if (!req.body.Modelo) {
      res.status(400).send ({
          message:"Se necesita un Modelo"
      })
  }
  
  if (!req.body.Serial) {
      res.status(400).send ({
          message:"Se necesita un Serial"
      });
      return;
  }
  if (!req.body.Placa) {
      res.status(400).send ({
          message:"Se necesita un numero de Placa"
      });
      return;
  }
  if (!req.body.BN) {
      res.status(400).send ({
          message:"Se necesita un numero de BN"
      });
      return;
  }
  if (!req.body.BN) {
      res.status(400).send ({
          message:"Se necesita un numero de BN"
      });
      return;
  }
  if (!req.body.Departamento) {
      res.status(400).send ({
          message:"Se necesita asignar un Departamento"
      });
      return;
  }*/

  const test = {
    Dispositivo: req.body.Dispositivo,
    Modelo: req.body.Modelo,
    Nombre_Equipo: req.body.Nombre_Equipo,
    Serial: req.body.Serial,
    Placa: req.body.Placa,
    BN: req.body.BN,
    Usuario: req.body.Usuario,
    ID_Usuario: req.body.ID_Usuario,
    Departamento: req.body.Departamento,
    OS: req.body.OS,
    Version: req.body.Version,
    CPU: req.body.CPU,
    Memory: req.body.Memory,
    Storage: req.body.Storage,
    Size: req.body.Size,
    Entrada: req.body.Entrada,
    Mantenimiento: req.body.Mantenimiento

  };


  Test.create(test)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Hubo algun error creando el test."
      });
    });
};


exports.findAll = (req, res) => {
  const Serial = req.query.Serial;
  var condition = Serial ? { Serial: { [Op.like]: `%${Serial}%` } } : null;

  Test.findAll({ where: condition })
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
  const Serial = req.params.Serial;

  Test.findbyOne(Serial)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontro el serial=${Serial}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error encontrando el serial=" + Serial
      });
    });
};

exports.update = (req, res) => {
  const Serial = req.params.Serial;

  Test.update(req.body, {
    where: { Serial: Serial }
  })
    .then(data => {
      if (data) {
        res.send({
          message: "Test actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo actualiza el dispositivo con serial=${Serial}. Quizas no existe o no se ingresaron los nuevos datos`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error actuallizando el test con serial=" + Serial
      });
    });
};

exports.delete = (req, res) => {
  const Serial = req.params.Serial;

  Test.destroy({
    where: { Serial: Serial }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Test eliminado satisfactoriamente."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el test con serial=${Serial}. Quizas no se encontro.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar el test=" + Serial
      });
    });
};

exports.deleteAll = (req, res) => {
  Test.destroy({
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
  const Dispositivo = req.params.Dispositivo
  var condition = Dispositivo ? { Dispositivo: { [Op.like]: `%${Dispositivo}%` } } : null;

  Test.findAndCountAll({ where: condition })
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

  Test.findAll({ where: { Departamento: 'Almacen' } })
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
exports.findAllWhereNOBN = (req, res) => {

  Test.findAll({ where: { Departamento: { [Op.ne]: 'Descargo BN' } } })
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

exports.findAllWhereAD = (req, res) => {

  Test.findAll({ where: { Usuario: null, Departamento: { [Op.ne]: 'Descargo BN' } } })
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

  Test.findAll({ where: { Usuario: null, Departamento: { [Op.ne]: 'Descargo BN' } } })
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

exports.findAllWhereUO = (req, res) => {

  Test.findAll({ where: { Usuario: { [Op.ne]: null }, Departamento: { [Op.ne]: 'Descargo BN' } } })
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
exports.findAllWhereDBN = (req, res) => {

  Test.findAll({ where: { Departamento: 'Descargo BN' } })
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

exports.findByD = (req, res) => {
  const DepartamentoL = req.params.Departamento;
  Test.findAll({ where: { Departamento: DepartamentoL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};
exports.findByDis = (req, res) => {
  const DispositivoL = req.params.Dispositivo;
  Test.findAll({ where: { Dispositivo: DispositivoL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};
exports.findByM = (req, res) => {
  const ModeloL = req.params.Modelo;
  Test.findAll({ where: { Modelo: ModeloL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};
exports.findByDDis = (req, res) => {
  const DepartamentoL = req.params.Departamento;
  const DispositivoL = req.params.Dispositivo;
  Test.findAll({ where: { Departamento: DepartamentoL, Dispositivo: DispositivoL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};
exports.findByDMod = (req, res) => {
  const DepartamentoL = req.params.Departamento;
  const ModeloL = req.params.Modelo;
  Test.findAll({ where: { Departamento: DepartamentoL, Modelo: ModeloL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};
exports.findByDisMod = (req, res) => {
  const DispositivoL = req.params.Dispositivo;
  const ModeloL = req.params.Modelo;
  Test.findAll({ where: { Dispositivo: DispositivoL, Modelo: ModeloL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};
exports.findByDDisMod = (req, res) => {
  const DepartamentoL = req.params.Departamento;
  const DispositivoL = req.params.Dispositivo;
  const ModeloL = req.params.Modelo;
  Test.findAll({ where: { Departamento: DepartamentoL, Dispositivo: DispositivoL, Modelo: ModeloL } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Sucedio algun error buscando el departamento"
      });
    });
};

exports.updateUser = (req, res) => {
  const ID_UsuarioU = req.params.ID_Usuario;
  const Serial = req.params.Serial;
  db.sequelize2.query(`UPDATE test.tests SET Departamento = (SELECT Departamento FROM test.usuarios Where ID_Usuario="${ID_UsuarioU}"), ID_Usuario = (SELECT ID_Usuario FROM test.usuarios Where ID_Usuario="${ID_UsuarioU}"),
  Usuario = (SELECT Usuario FROM test.usuarios Where ID_Usuario="${ID_UsuarioU}") WHERE Serial= "${Serial}"`)
    .then(data => {
      if (data) {
        res.send({
          message: "Test actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo actualiza el dispositivo con serial=${Serial}. Quizas no existe o no se ingresaron los nuevos datos`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error actuallizando el test con serial=" + Serial
      });
    });
};

exports.updateDA = (req, res) => {
  const Serial = req.params.Serial;
  db.sequelize.query(`UPDATE test.tests SET Departamento = "Almacen", ID_Usuario = null, Usuario = null WHERE Serial = "${Serial}"`)
    .then(data => {
      if (data) {
        res.send({
          message: "Test actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo actualiza el dispositivo con serial=${Serial}. Quizas no existe o no se ingresaron los nuevos datos`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error actuallizando el test con serial=" + Serial
      });
    });
};

exports.updateDD = (req, res) => {
  const Serial = req.params.Serial;
  db.sequelize.query(`UPDATE test.tests SET ID_Usuario = null, Usuario = null WHERE Serial = "${Serial}"`)
    .then(data => {
      if (data) {
        res.send({
          message: "Test actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo actualiza el dispositivo con serial=${Serial}. Quizas no existe o no se ingresaron los nuevos datos`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error actuallizando el test con serial=" + Serial
      });
    });
};

exports.updateDBN = (req, res) => {
  const Serial = req.params.Serial;
  db.sequelize.query(`UPDATE test.tests SET Departamento = "Descargo BN", ID_Usuario = null, Usuario = null WHERE Serial = "${Serial}"`)
    .then(data => {
      if (data) {
        res.send({
          message: "Test actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo actualiza el dispositivo con serial=${Serial}. Quizas no existe o no se ingresaron los nuevos datos`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error actuallizando el test con serial=" + Serial
      });
    });
};