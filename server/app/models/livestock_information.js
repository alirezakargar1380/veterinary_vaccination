'use strict';
module.exports = function (sequelize, DataTypes) {
  // console.log(sequelize)
  const livestock_information = sequelize.define('livestock_information', {
    livestock_id: {
      type: DataTypes.INTEGER,
    },
    vaccinated_number: {
      type: DataTypes.INTEGER,
    },
    emplyee_id: {
      type: DataTypes.INTEGER,
    },
    type_livestock: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.TEXT,
    },
    date: {
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
    paranoid: true,
    timestamps: false
  });

  livestock_information.associate = function(models) {
    // console.log(models)
    livestock_information.hasOne(models.livestock, {
      foreignKey: 'id',
      sourceKey: 'livestock_id'
    });

    models.users.belongsTo(livestock_information,{
      foreignKey: 'id',
      sourceKey: 'emplyee_id'
    })

    livestock_information.hasOne(models.users, {
      foreignKey: 'id',
      sourceKey: 'emplyee_id'
    });

  }

  return livestock_information;
};