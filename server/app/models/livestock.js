'use strict';
module.exports = function (sequelize, DataTypes) {
  // console.log(sequelize)
  const livestock = sequelize.define('livestock', {
    name: {
      type: DataTypes.TEXT,
    },
    lastname: {
      type: DataTypes.TEXT,
    },
    natinal_id: {
      type: DataTypes.INTEGER,
    },
    father: {
      type: DataTypes.TEXT,
    },
    type_work: {
      type: DataTypes.TEXT,
    },
    veterinary_address: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.TEXT,
    },
    village: {
      type: DataTypes.TEXT,
    },
    booklet_number: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "livestock",
    paranoid: true,
    timestamps: false
  });

  livestock.associate = function(models) {
    livestock.hasMany(models.livestock_information,{
      foreignKey: 'livestock_id',
      sourceKey: 'id'
    });

    models.users.belongsTo(models.livestock_information,{
      foreignKey: 'id',
      sourceKey: 'emplyee_id'
    })

    // livestock.hasOne(models.users, {
    //   foreignKey: 'livestock_id',
    //   sourceKey: 'id'
    // });

  }

  return livestock;
};