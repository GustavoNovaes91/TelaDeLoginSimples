const express = require("express")
const CadastroUserController = require("../../controllers/CadastroUserController");
const loginUserRouter = express.Router();

loginUserRouter.get("/cadastro", CadastroUserController.cadastroUserGet);
loginUserRouter.get("/home", CadastroUserController.cadastroUserHome);
loginUserRouter.post("/cadastro/user", CadastroUserController.cadastroUserPost);

module.exports = loginUserRouter;