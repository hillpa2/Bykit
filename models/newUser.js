module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    locality: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
      // We're saying that we want our Author to have Posts
      classMethods: {
        timestamps: false
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          users.hasMany(models.offers, {
            onDelete: "cascade"
          });
        }
      }
    });
  return users;
};









//var orm = require("../config/orm.js");

//var user = {
  //all: function(ub) {
    //orm.all("users", function(res) {
      //ub(res);
    //});
  //},
  // The variables cols and vals are arrays.
  //create: function(cols, vals, cb) {
    //orm.create("users", cols, vals, function(res) {
      //ub(res);
    //});
  //},
  //update: function(objColVals, condition, cb) {
    //orm.update("users", objColVals, condition, function(res) {
      //ub(res);
    //});
  //}
//};
// Export the database functions for the controller (catsController.js).
//module.exports = user;