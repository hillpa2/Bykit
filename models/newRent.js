module.exports = function(sequelize, DataTypes) {
  var rent = sequelize.define("rent", {
    email_buyer: DataTypes.STRING,
    offer_id: DataTypes.INTEGER,
    lower_time: DataTypes.INTEGER,
    upper_time: DataTypes.INTEGER
  },
    {
      // We're saying that we want our Author to have rents
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a rent can't be made
          rent.belongsTo(models.users, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return rent;
};
