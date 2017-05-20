// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the offers
  app.get("/api/offers", function(req, res) {
    var query = {};
    if (req.query.offer_id) {
      query.offerId = req.query.offer_id;
    }
    // 1. Add a join here to include all of the offers to these offers
    db.offers.findAll({
      include: [db.offer],
      where: query
    }).then(function(dboffers) {
      res.json(dboffers);
    });
  });

  // Get rotue for retrieving a single offers
  app.get("/api/offers/:id", function(req, res) {
    // 2. Add a join here to include the offer who wrote the offers
    db.offers.findOne({
      include: [db.offer],
      where: {
        id: req.params.id
      }
    }).then(function(dboffers) {
      console.log(dboffers);
      res.json(dboffers);
    });
  });

  // offers route for saving a new offers
  app.offers("/api/offers", function(req, res) {
    db.offers.create(req.body).then(function(dboffers) {
      res.json(dboffers);
    });
  });

  // DELETE route for deleting offers
  app.delete("/api/offers/:id", function(req, res) {
    db.offers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dboffers) {
      res.json(dboffers);
    });
  });

  // PUT route for updating offers
  app.put("/api/offers", function(req, res) {
    db.offers.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dboffers) {
        res.json(dboffers);
      });
  });
};
