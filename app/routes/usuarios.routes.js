module.exports = (app) => {

    const usuarios = require("../controllers/usuarios.controller.js");

    var router = require("express").Router();

    router.post("/usuarios/", usuarios.create);
    router.get("/usuarios/", usuarios.findAll);
    router.get("/usuarios/all/:Departamento", usuarios.findAndCountAll);
    router.get("/usuarios/:ID_Usuario", usuarios.findOne);
    router.put("/usuarios/:ID_Usuario", usuarios.update);
    router.delete("/usuarios/:ID_Usuario", usuarios.delete);
    router.get("/usuarios/all_usuarios/", usuarios.findAllWhere);
    router.get("/usuarios/all_asignacion/show", usuarios.findAllWhereU);
  
    app.use('/api/', router);
};