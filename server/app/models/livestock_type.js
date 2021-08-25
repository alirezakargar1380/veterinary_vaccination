'use strict';
module.exports = function (sequelize, DataTypes) {
  // console.log(sequelize)
  const livestock_type = sequelize.define('livestock_type', {
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    tableName: "livestock_type",
    paranoid: true
  });

  return livestock_type;
};