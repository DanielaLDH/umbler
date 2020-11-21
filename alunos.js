const express = require("express");
const app = express();

app.use((req, res, next) => { 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
        res.redirect(`https://${req.headers.host}${req.url}`); 
    else 
        next(); 
});

app.get("/alunos", function(req, res){
	var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

	MongoClient.connect('geonosis.mongodb.umbler.com:39472', function(err, db) {
    if(err) throw err;

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

