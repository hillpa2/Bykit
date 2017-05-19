
module.exports = function(sequelize, DataTypes) {
  var offers = sequelize.define("offers", {
    email_seller: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.INTEGER,
    rent_per_hour: DataTypes.INTEGER,
    description: DataTypes.STRING,
    lower_time: DataTypes.INTEGER,
    upper_time: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  return offers;
};