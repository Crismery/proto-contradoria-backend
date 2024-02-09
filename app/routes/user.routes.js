const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    }); 

    app.get("/api/test/all", controller.allAccess);
    app.get("/api/test/user", [authJwt.verifytoken], controller.userBoard);
    app.get("/api/test/admin", [authJwt.verifytoken, authJwt.isAdmin], controller.adminBoard);
};