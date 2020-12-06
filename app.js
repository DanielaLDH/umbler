const express = require("express");
const app = express();

app.use((req, res, next) => { 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
        res.redirect(`https://${req.headers.host}${req.url}`); 
    else  
        next(); 
});

app.get("/", function(req, res){
	res.send("Hello World ");
})

app.listen(3000, function(){
console.log("Servidor rodando na url https://brocolis.tk/ ");

});

