'use strict';
module.exports = function (sequelize, DataTypes) {
  const vaccines = sequelize.define('vaccines', {
    name: {
      type: DataTypes.TEXT,
    },
    serial: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: "vaccines",
    paranoid: true,
    timestamps: false
  });

  return vaccines;
};