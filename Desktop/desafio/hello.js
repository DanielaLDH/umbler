const express = require("express");
const app = express();


app.get("/", function(req, res){
	res.send("Hello World");
})

app.listen(3000, function(){
console.log("Servidor rodando na url http://localhost:8081/");

});

