var express = require("express");
var app = express();

app.use(express.static(__dirname + "/styleguide/index.html"));

app.get('/',function(req,res){
  res.sendFile(__dirname + "/styleguide/index.html");
});

app.use('/build', express.static(__dirname + "/styleguide/build"))

var server = app.listen(process.env.PORT);
