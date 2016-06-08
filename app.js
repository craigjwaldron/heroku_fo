var express = require ("express");
var app = express ();

var server = app.listen (process.env.PORT, function(){
  console.log("Hello World! Good morning, good afternoon, good evening, and good night from the hostess with the mostess");
});

app.get("/",function( req , res ){
  res.writeHead(200);
  res.end();
});
