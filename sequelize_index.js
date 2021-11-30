const {Sequelize, DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurants-seq.sqlite',
    logging: false
})

module.exports={sequelize, DataTypes, Model}