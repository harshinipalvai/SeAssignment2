var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var request=require('request');
var app=express();
var port=6600;
app.use(express.static(path.join(__dirname,'/client/dist/se/')));

// const api= require('./routes/api.js')
// app.use('/api',api);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/se/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen(port,function(){
console.log('Partner portal running');
});