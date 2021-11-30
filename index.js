const {sequelize} = require('./sequelize_index')
const {Restaurant} = require('./Model/Restaurant')
const {Menu} = require('./Model/Menu')
const {MenuItem} = require('./Model/MenuItem')
const {data} = require('./db.json')

// restaurant has many menus
// menu belongs to restaurant
Restaurant.hasMany(Menu,{as: 'menus', foreignKey: 'restaurant_id'}) // Menu table will have res_id FK
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'}) // Menu table will res_id FK

// menu has many menuItems
// menuItem belongs to menu
Menu.hasMany(MenuItem, {foreignKey: 'menu_id'}) // MenuItem table will have menu_id FK
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'}) // MenuItem table will menu_id FK

console.log(data)

module.exports = {
    Restaurant,
    Menu,
    MenuItem
}