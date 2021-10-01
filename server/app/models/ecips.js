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
    ecips.hasOne(models.users, {
      foreignKey: 'id',
      sourceKey: 'employee_id'
    });
  }

  return ecips;
};