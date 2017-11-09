var express = require("express");
var bodyParser = require("body-parser");

//create express app
var app = express();

//parse requests of content-type - application / urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse requests of content-type-application/json
app.use(bodyParser.json());

//Configuring the database
var dbConfig = require("./config/database.config.js");
var mongoose = require("mongoose");

mongoose.connect(dbConfig.url);

mongoose.connection.on("error", function() {
  console.log("Could not connect to the database. Exiting now..");
  process.exit();
});
mongoose.connection.once("open", function() {
  console.log("Succesfully connected to database");
});

//define simple route
app.get("/", function(req, res) {
  res.json({ message: "Welcome to Jiibu application" });
});

// ........

// Require Datas routes
require("./app/routes/note.routes.js")(app);

// ........

//listen for request
app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
