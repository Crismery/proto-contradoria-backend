const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:4200"],
    })
);

const db = require("./app/models");
const Role = db.role;


db.sequelize.sync();
db.sequelize2.sync({});//remeber to force when can
db.sequelize3.sync({ });
db.sequelize4.sync({})


/*db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync DB');
    initial();
});*/


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "rag-session",
        keys: ["COOKIE_SECRET"],
        httpOnly: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "App running..." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/test.routes')(app);
require('./app/routes/usuarios.routes')(app);
require('./app/routes/mantenimiento.routes')(app);



const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create({
        id: 2,
        name: "admin"
    });
}