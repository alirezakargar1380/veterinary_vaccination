const {
  livestock
} = require("./../models")
const db = require("./../models/index")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")

exports.add = async (json) =>
{
  try {

    livestock.create(json)
    return true;

  } catch (error) {
    log.error(error);
    throw Exception.setError(error, false);
  }
}

exports.get = async () =>
{
  try {

    return db.sequelize.query("SELECT * FROM `livestock` INNER JOIN veterinary_address ON livestock.veterinary_address=veterinary_address.id")

  } catch (error) {
    log.error(error);
    throw Exception.setError(error);
  }
}