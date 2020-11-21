const express = require("express");
const app = express();

app.use((req, res, next) => {  
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
        res.redirect(`https://${req.headers.host}${req.url}`); 
    else 
        next(); 
});

app.get("/hora", function(req, res){
	var data = new Date();

	var dia     = data.getDate();           
	var dia_sem = data.getDay();            
	var mes     = data.getMonth();         
	var ano2    = data.getYear();           
	var ano4    = data.getFullYear();       
	var hora    = data.getHours();          
	var min     = data.getMinutes();        
	var seg     = data.getSeconds();        
	var mseg    = data.getMilliseconds();   
	var tz      = data.getTimezoneOffset(); 

	var str_data = dia + '/' + (mes+1) + '/' + ano4;
	var str_hora = hora + ':' + min + ':' + seg;

	res.send('Hoje é ' + str_data + ' às ' + str_hora);
})

app.listen(3000, function(){
console.log("Servidor rodando na url https://brocolis.tk/hora");

});

