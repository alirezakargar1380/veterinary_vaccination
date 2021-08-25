'use strict';
module.exports = function (sequelize, DataTypes) {
  // console.log(sequelize)
  const employee = sequelize.define('employee', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    tableName: "employee",
    paranoid: true
  });

  return employee;
};