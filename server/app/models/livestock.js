'use strict';
module.exports = function (sequelize, DataTypes) {
  // console.log(sequelize)
  const livestock = sequelize.define('livestock', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    natinal_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    father: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    tableName: "livestock",
    paranoid: true
  });

  return livestock;
};