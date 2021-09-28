'use strict';
module.exports = function (sequelize, DataTypes) {
  const ecips = sequelize.define('ecips', {
    employee_id: {
      type: DataTypes.INTEGER,
    },
    ecip_id: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: "ecips",
    paranoid: true,
    timestamps: false
  });

  ecips.associate = function(models) {

  }

  return ecips;
};