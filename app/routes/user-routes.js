//Requiring our models and passport as we've configured it
var db = require("../../models/newUser");
//var offers = require("../../models/newOffers").offers;
//var rent = require("../../models/newRent").rent;
//var passport = require("../config/passport");
//temporarily removed passport

module.exports = function(app) {
  
  // GET route for getting all of the offers
  app.get("/api/users", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.users.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // POST route for saving a new offers. We can create offers with the data in req.body
  app.post("/api/users", function(req, res) {
    // Write code here to create a new offer and save it to the database
    // and then res.json back the new offer to the user
    db.users.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      address: req.body.address,
      locality: req.body.locality,
      country: req.body.country,
    }).then(function(results) {
      res.json(results);
    })
  });



};