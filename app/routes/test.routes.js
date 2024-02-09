module.exports = app => {

  const test = require("../controllers/test.controller.js")


  var router = require("express").Router();

  router.post("/", test.create);
  router.get("/", test.findAll);
  router.get("/all/:Dispositivo", test.findAndCountAll);
  router.get("/:Serial", test.findOne);
  router.put("/:Serial", test.update);
  router.delete("/:Serial", test.delete);
  router.get("/all_entradas/show", test.findAllWhere);
  router.get("/all_AD/show", test.findAllWhereAD);
  router.get("/all_asignacion/show", test.findAllWhereU);
  router.get("/all_descargo/show", test.findAllWhereUO);
  router.get("/all_descargoNOBN/show", test.findAllWhereNOBN);
  router.get("/all_descargoBN/show", test.findAllWhereDBN);
  router.get("/all/whereD/:Departamento", test.findByD);
  router.get("/all/whereDis/:Dispositivo", test.findByDis);
  router.get("/all/whereMod/:Modelo", test.findByM);
  router.get("/all/whereDDis/:Departamento/:Dispositivo", test.findByDDis);
  router.get("/all/whereDMod/:Departamento/:Modelo", test.findByDMod);
  router.get("/all/whereDisMod/:Dispositivo/:Modelo", test.findByDisMod);
  router.get("/all/whereDDisMod/:Departamento/:Dispositivo/:Modelo", test.findByDDisMod);  
  router.put("/asign/usuario/:ID_Usuario/:Serial", test.updateUser);
  router.put("/descargoA/:Serial", test.updateDA);
  router.put("/descargoD/:Serial", test.updateDD);
  router.put("/descargoBN/:Serial", test.updateDBN);
  
 

  app.use('/api/test', router);

};