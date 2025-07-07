const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  role: { type: DataTypes.STRING, defaultValue: "user" },
});

module.exports = User;
