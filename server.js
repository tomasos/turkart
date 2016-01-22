var express = require('express');
var app = express();



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/build', express.static(__dirname + '/build'));
app.use('/css', express.static(__dirname + '/css'));

app.listen(3000, function() {
  console.log('server started');
});
