var express = require("express");
var app = express();

app.use(express.static(__dirname + "/styleguide/index.html"));

app.get('/',function(req,res){
  console.log(__dirname + "/app/styleguide/index.html")
  res.sendFile(__dirname + "/app/styleguide/index.html")
});

app.use('/build', express.static(__dirname + "/app/styleguide/build"))

var server = app.listen(process.env.PORT || 8080)
