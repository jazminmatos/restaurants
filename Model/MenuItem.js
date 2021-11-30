const { db, DataTypes, Model } = require("../sequelize_index");

class MenuItem extends Model {}
MenuItem.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = {
  MenuItem,
};
