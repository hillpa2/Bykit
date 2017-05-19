// Requiring our models and passport as we've configured it
var db = require("../../models");
//var passport = require("../config/passport");
//temporarily removed passport

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  //app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    //res.json("/members");
  //});
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.users.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      //res.json({
        //email: req.user.email,
        //id: req.user.id
      //});

      //Might be easier to use this, fix if incorrect
      db.users.findAll({}).then(function(results){
        res.json(results);
      });
    }
  });

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
    db.offers.create({
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


  // GET route for getting all of the offers
  app.get("/api/offers", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.offers.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // POST route for saving a new offers. We can create offers with the data in req.body
  app.post("/api/offers", function(req, res) {
    // Write code here to create a new offer and save it to the database
    // and then res.json back the new offer to the user
    db.offers.create({
      email_seller: req.body.email_seller,
      title: req.body.title,
      type: req.body.type,
      rent_per_hour: req.body.rent_per_hour,
      description: req.body.description,
      lower_time: req.body.lower_time,
      upper_time: req.body.upper_time
    }).then(function(results) {
      res.json(results);
    })
  });

  // GET route for getting all of the rent
  app.get("/api/rent", function(req, res) {
    // Write code here to retrieve all of the rent from the database and res.json them
    // back to the user
    db.rent.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // POST route for saving a new offers. We can create offers with the data in req.body
  app.post("/api/rent", function(req, res) {
    // Write code here to create a new offer and save it to the database
    // and then res.json back the new offer to the user
    db.rent.create({
      email_buyer: req.body.email_buyer,
      offer_id: req.body.offer_id,
      lower_time: req.body.lower_time,
      upper_time: req.body.upper_time
    }).then(function(results) {
      res.json(results);
    })
  });

  //IRRELEVANT IRRELEVANT IRRELEVANT IRRELEVANT IRRELEVANT
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  //app.delete("/api/todos/:id", function(req, res) {

    //db.Todo.destroy({
      //where: {
        //id: req.params.id
      //}
    //}).then(function(results) {
      //res.json(results);
    //});
  //});

  // PUT route for updating todos. We can get the updated todo data from req.body
  //app.put("/api/todos", function(req, res) {
    //var updater={
      //text: req.body.text,
      //complete: req.body.complete
    //}
     
    //var query={
      //where: {
        //id: req.body.id
      //}
    //};
      //{ text: 'a very different title now' },
      //{ where: { _id: 1 } }
    //db.Todo.update(updater, query).then(function(results) {
      //res.json(results);
    //});
  //});
};