const express = require("express");
const app = express();

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});

app.get("/alunos", function(req, res){
	var MongoClient = require('mongodb').MongoClient;
	var url = "geonosis.mongodb.umbler.com:39472";

	MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
  		var dbo = db.db("brocolisdb");
  		dbo.brocolisdb("brocolisdb").find({}).toArray(function(err, result) {
    	if (err) throw err;
    		console.log(result);
    		db.close();
  });
});
})

app.listen(3000, function(){
console.log("Servidor rodando na url https://brocolis.tk/alunos");

});

