module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "test",
    dialect: "mysql",
    pool: {
        max: 8,
        min: 0,
        acquire: 3000,
        idle: 10000
    }

};