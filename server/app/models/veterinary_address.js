'use strict';
module.exports = function (sequelize, DataTypes) {
  const veterinary_address = sequelize.define('veterinary_address', {
    address: {
      type: DataTypes.TEXT,
    }
  }, {
    tableName: "veterinary_address",
    paranoid: true,
    timestamps: false
  });

  return veterinary_address;
};