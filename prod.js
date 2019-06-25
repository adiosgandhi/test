var express=require('express');
var app=express();

var productcontroller=function(req,res){

console.log("invoking rest api");

var products=[{id:1,title:"ROse",description:"nice flower"},
{id:2,title:"lily",description:"yellow flower"},
{id:3,title:"gerbera",description:"wedding flower"},
{id:4,title:"lotus",description:"flower"}];
res.send(products);
};

//routing

app.get('/products',productcontroller);
var server=app.listen(8086,function(){
	var host=server.address().address
	var port=server.address().port
	console.log("example app listening at port 8086",host,port)
})
