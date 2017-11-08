var express = require("express");
var bodyParser = require("body-parser");

//create express app
var app = express();

//parse requests of content-type - application / urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type-application/json
app.use(bodyParser.json());

//define simple route
app.get("/", function(req, res) {
  res.json({ message: "Welcome to Jiibu application" });
});

//listen for request
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
