// Menu model
const { db, DataTypes, Model } = require("../sequelize_index");

class Menu extends Model {}
Menu.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = {
  Menu,
};
