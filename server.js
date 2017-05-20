//Dependencies
/////////////////////////////////////////////////
var http = require("http")
var express = require('express');

var path = require("path")
var bodyParser = require('body-parser');
var methodOverride = require("method-override");


////////////////////////////////////////////////
//express app

var app = express();
var PORT = process.env.PORT || 8080;

/////////////////////////////////////////////////
//express parsing

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/json"
}));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname)));

//////////////////////////////////////////////////////
//static directory
app.use(express.static("app/public"));

/////////////////////////////////////////////////////
//routes

require("./app/routes/html-routes.js")(app);
require("./app/routes/offer-routes.js")(app);
require("./app/routes/rent-routes.js")(app);
require("./app/routes/user-routes.js")(app);


var db = require("./models");
//////////////////////////////////////////////////////
//app listening
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});