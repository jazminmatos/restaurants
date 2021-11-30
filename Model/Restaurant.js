const { db, DataTypes, Model } = require("../sequelize_index");

class Restaurant extends Model {}
Restaurant.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = {
  Restaurant,
};
