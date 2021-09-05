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
    type_work: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    veterinary_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    state: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.TEXT,
    },
    booklet_number: {
      type: DataTypes.INTEGER,
      allowNull: false
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