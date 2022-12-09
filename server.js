const json = require("express");
const express = require("express");
const server = express();
const DataBase = require("./api/database/DataBase");
const app = require("./app");
const port = process.env.PORT || 8080;

server.use(app);

server.listen(port, (error) => {
  if(error){
    console.log('error no servidor!');
}else{
    console.log(`servidor rodando na port ${port}`);
}
});
