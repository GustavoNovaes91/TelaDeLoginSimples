const Sequelize = require("sequelize");
const dataBase = require("../../DataBase");

const UserModel = dataBase.define("CadastroUser", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sobreNome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  confirmarEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  confirmarSenha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = UserModel;