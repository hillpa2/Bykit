var db = require("../../models/newRent");

module.exports = function(app) {
	// GET route for getting all of the rent
  app.get("/api/rent", function(req, res) {
    // Write code here to retrieve all of the rent from the database and res.json them
    // back to the user
    db.rent.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // POST route for saving a new offers. We can create offers with the data in req.body
  //app.post("/api/rent", function(req, res) {
    // Write code here to create a new offer and save it to the database
    // and then res.json back the new offer to the user
    //db.rent.create({
      //email_buyer: req.body.email_buyer,
      //offer_id: req.body.offer_id,
      //lower_time: req.body.lower_time,
      //upper_time: req.body.upper_time
    //}).then(function(results) {
      //res.json(results);
    //})
  //});
}