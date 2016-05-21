var express = require('express');
var app = express();
var http = require('http').Server(app);

const basedir = __dirname + "/public/";
var httpPort = 80;

app.use(express.static(basedir));

app.get('/', function(req, res) {
	res.sendFile(basedir + "index.html");
});

http.listen(httpPort, function() {
	console.log("HTTP Server listening on " + httpPort);
});