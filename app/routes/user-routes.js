var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each users's Posts
    db.users.findAll({}).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2; Add a join to include all of the users's Posts here
    db.users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

};
