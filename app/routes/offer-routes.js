var db = require("../../models/newOffers");

module.exports = function(app) {
	// GET route for getting all of the offers
  app.get("/api/offers", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.offers.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // POST route for saving a new offers. We can create offers with the data in req.body
  //app.post("/api/offers", function(req, res) {
    // Write code here to create a new offer and save it to the database
    // and then res.json back the new offer to the user
    //db.offers.create({
      //email_seller: req.body.email_seller,
      //title: req.body.title,
      //type: req.body.type,
      //rent_per_hour: req.body.rent_per_hour,
      //description: req.body.description,
      //lower_time: req.body.lower_time,
      //upper_time: req.body.upper_time
    //}).then(function(results) {
      //res.json(results);
    //})
  //});
}