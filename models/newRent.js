module.exports = function(sequelize, DataTypes) {
  var rent = sequelize.define("rent", {
    email_buyer: DataTypes.STRING,
    offer_id: DataTypes.STRING,
    lower_time: DataTypes.STRING,
    upper_time: DataTypes.STRING
  }, {
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
      // We're saying that we want our Author to have Posts
      classMethods: {
        timestamps: false
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          rent.belongsTo(models.users, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
  return rent;
};