//classwork5

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
  
//classwork6

  /*var http = require('http');
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

/*var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var server = http.Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/form', function(req, res){
  res.sendFile(__dirname+'/form.html');
});

app.post('/submit_user', function(req, res){
  console.log(req.body);
});

app.get('/system/about', function(req, res){
  res.sendFile(__dirname+'/about.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
});*/

//Classwork8 //how data is saved from fontend to database

var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongo = require('mongodb');

//for local
var db, uri = "mongodb://localhost:28017";

//for c9
uri = "mongodb://"+process.env.IP+":27017";

mongo.MongoClient.connect(uri
,{useNewUrlParser: true}, function(err,client)
{
  if(err)
  {
    console.log("Could not connect to MongoDB");
  }
  else
  {
    db = client.db('simple-node');
  }
});

var save = function(form_data)   //save data from frontend
{
  db.createCollection('users', function(err, collection){});
  var collection = db.collection('users');
  collection.save(form_data);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var server = http.Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/form', function(req, res){
  res.sendFile(__dirname+'/form.html');
});

app.post('/submit_user', function(req, res){
  console.log(req.body);
  save(req.body);
  res.status('200');
});

app.get('/system/about', function(req, res){
  res.sendFile(__dirname+'/about.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
    console.log('Server running');
});


