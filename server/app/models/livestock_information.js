'use strict';
module.exports = function (sequelize, DataTypes) {
  // console.log(sequelize)
  const livestock_information = sequelize.define('livestock_information', {
    livestock_id: {
      type: DataTypes.INTEGER,
    },
    type_livestock: {
      type: DataTypes.TEXT,
    },
    number_livestock: {
      type: DataTypes.INTEGER,
    },
    number_eligible_livestock: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "livestock_information",
    paranoid: true
  });

  return livestock_information;
};