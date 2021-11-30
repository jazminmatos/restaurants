const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./restaurants-seq.sqlite",
  logging: false,
});

// export db
module.exports = { db, DataTypes, Model };
