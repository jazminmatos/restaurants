const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { MenuItem } = require("./MenuItem");

// restaurant has many menus && menu belongs to restaurants
// Menu table will have res_id FK
Restaurant.hasMany(Menu, { as: "menus", foreignKey: "restaurant_id" });
Menu.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

// menu has many menuItems && menuItem belongs to menu
// MenuItem table will have menu_id FK
Menu.hasMany(MenuItem, { foreignKey: "menu_id" });
MenuItem.belongsTo(Menu, { foreignKey: "menu_id" });

module.exports = {
  Restaurant,
  Menu,
  MenuItem,
};
