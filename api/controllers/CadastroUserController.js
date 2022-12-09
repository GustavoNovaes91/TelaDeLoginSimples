const UserModel = require("../database/models/dbUser/UserModels");


  exports.cadastroUserGet = (req, res) => { 
    res.render("pages/home");
  };

  exports.cadastroUserHome = (req, res) => {
    res.send("Cadastro Feito Com Sucesso!");
  };
  
  exports.cadastroUserPost = (req, res) => {
  
    var nome = req.body.nome;
    var sobreNome = req.body.sobreNome;
    var email = req.body.email;
    var confirmarEmail = req.body.confirmarEmail;
    var senha = req.body.senha;
    var confirmarSenha = req.body.confirmarSenha;
    
    UserModel.create({
        
        nome: nome,
        sobreNome: sobreNome,
        email: email,
        confirmarEmail: confirmarEmail,
        senha: senha,
        confirmarSenha: confirmarSenha
        
  }).then(()=>{
    res.redirect("/home")
})
};