const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(__dirname + "/public"));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
 
});

app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
 
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/public/contact.html'));
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');