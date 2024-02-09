module.exports = app => {

    const mantenimiento = require("../controllers/mantenimiento.controller.js")
  
  
    var router = require("express").Router();
  
    router.post("/", mantenimiento.create);
    router.get("/", mantenimiento.get);
    
    app.use('/api/mantenimiento/', router);
    
  
  };