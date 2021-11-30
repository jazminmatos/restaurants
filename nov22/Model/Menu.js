const {sequelize, DataTypes, Model} = require('../sequelize_index');

class Menu extends Model {


}
Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Menu
};