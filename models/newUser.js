module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    locality: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    timestamps: false
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