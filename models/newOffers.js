module.exports = function(sequelize, DataTypes) {
  var offers = sequelize.define("offers", {
    email_seller: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.INTEGER,
    rent_per_hour: DataTypes.INTEGER,
    description: DataTypes.STRING,
    lower_time: DataTypes.INTEGER,
    upper_time: DataTypes.INTEGER
  },
  {
      // We're saying that we want our Author to have Posts
      classMethods: {
        timestamps: false,
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          offers.belongsTo(models.users, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
  //return offers;
};