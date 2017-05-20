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

  // GET route for getting all of the rent
  app.get("/api/rent", function(req, res) {
    var query = {};
    if (req.query.users_id) {
      query.usersId = req.query.users_id;
    }
    // 1. Add a join here to include all of the userss to these rent
    db.rent.findAll({
      include: [db.users],
      where: query
    }).then(function(dbrent) {
      res.json(dbrent);
    });
  });

  // Get rotue for retrieving a single rent
  app.get("/api/rent/:id", function(req, res) {
    // 2. Add a join here to include the users who wrote the rent
    db.rent.findOne({
      include: [db.users],
      where: {
        id: req.params.id
      }
    }).then(function(dbrent) {
      console.log(dbrent);
      res.json(dbrent);
    });
  });

  // rent route for saving a new rent
  app.rent("/api/rent", function(req, res) {
    db.rent.create(req.body).then(function(dbrent) {
      res.json(dbrent);
    });
  });

  // DELETE route for deleting rent
  app.delete("/api/rent/:id", function(req, res) {
    db.rent.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbrent) {
      res.json(dbrent);
    });
  });

  // PUT route for updating rent
  app.put("/api/rent", function(req, res) {
    db.rent.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbrent) {
        res.json(dbrent);
      });
  });
};
