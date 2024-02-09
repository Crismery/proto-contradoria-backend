const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const Temporal = require("sequelize-temporal");


const sequelize = new Sequelize(//Conexión Users/Roles
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const sequelize2 = new Sequelize(config.DB, config.USER, config.PASSWORD, {//Conexión test
    
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquiere: config.pool.acquiere,
        idle: config.pool.idle
    },
    define: {
        timestamps: false,
        noPrimaryKey: true,
        paranoid: true

    }
}
);

const sequelize3 = new Sequelize(config.DB, config.USER, config.PASSWORD, { //Conexión Usuarios
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquiere: config.pool.acquiere,
        idle: config.pool.idle
    },
    define: {
        timestamps: false,
        noPrimaryKey: true

    }
}
);

const sequelize4 = new Sequelize(config.DB, config.USER, config.PASSWORD, {//Conexión test
    
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquiere: config.pool.acquiere,
        idle: config.pool.idle
    },
    define: {
        timestamps: false,
        noPrimaryKey: true,
        paranoid: true

    }
}
);



const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize2 = sequelize2;
db.sequelize3 = sequelize3;
db.sequelize4 = sequelize4;


db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.test = require("../models/test.model.js")(sequelize2, Sequelize);
db.usuarios = require("./usuarios.model.js")(sequelize3, Sequelize);
db.mantenimiento = require("./mantenimiento.js")(sequelize4, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles"
});

db.user.belongsToMany(db.role, {
    through: "user_roles"
});

/*db.test.belongsToOne(db.user, {
    through: "user"
});*/

db.ROLES = ["user", "admin"];

module.exports = db;