'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pizza = sequelize.define("Pizza", {
    pizza_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devouredId: DataTypes.INTEGER
  })
  return Pizza;
}
