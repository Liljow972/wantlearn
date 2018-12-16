//importss
var express = require('express');
var bodyParser = require('body-parser')
var apiRouter = require('./apiRouter').router;
//instantiate server
var server = express();

//body parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//configure routes
server.get('/', function (req, res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>it works!</h1>');
});

server.use('/api/', apiRouter);

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.listen(8080, function() {
    console.log("server listen");
});