'use strict';
module.exports = function (sequelize, DataTypes) {
  const users = sequelize.define('users', {
    role: {
      type: DataTypes.TEXT,
    },
    personnel_code: {
      type: DataTypes.TEXT,
    },
    workplace_id: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    lastname: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: "users",
    paranoid: true,
    timestamps: false
  });

  return users;
};