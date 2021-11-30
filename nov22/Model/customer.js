const {sequelize, DataTypes, Model} = require('../sequelize_index')

class Customer extends Model {

}

Customer.init({
    name: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
})

module.exports = {
    Customer
}