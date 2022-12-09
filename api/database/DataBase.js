const Sequelize = require("sequelize");

const DataBase = new Sequelize("sitebasico", "root", "engenharia123", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = DataBase;