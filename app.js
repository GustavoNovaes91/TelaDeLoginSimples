const express = require("express");
const bodyparser = require("body-parser");
const DataBase = require("./api/database/DataBase");
const loginUserRouter = require("./api/routes/loginUser/routerLoginUser");
const app = express();

DataBase
    .authenticate()
    .then(()=>{
        console.log("conexao feita com o banco de dados");
    })
    .catch((msgerro)=>{
        console.log(msgerro);
    })

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());



app.use(loginUserRouter);

module.exports = app;