/*var http = require('http');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html',function(err,data){
      if(err){
        return console.log(err);
      }
      res.end(data);
  });
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });*/

 /* var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.Server(app);
  
  app.get('/about',function(req,res)      //how files are called from data base 
  {
    res.sendfile(__dirname+'/about.html');
  });
  
  app.get('/',function(req,res)
  {
    res.sendfile(__dirname+'/index.html');
  });
  
  server.listen(3000, 'localhost' ,function(){
    console.log('Server running');
  });*/

//classwork7

  var http = require('http');
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  
  
  
  var server = http.Server(app);
  
  
  app.get('/',function(req,res)                //how files are called from data base 
  {
    res.sendfile(__dirname+'/index.html');
  });
  
  app.get('/form',function(req,res)
  {
    res.sendfile(__dirname+'/form.html');
  });
  app.post('/submit_user',function(req,res)
  {
    console.log(req.body);
  });
  app.get('/system/about',function(req,res)
  {
    res.sendfile(__dirname+'/about.html');
  });
   server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });

