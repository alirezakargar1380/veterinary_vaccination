const {
  livestock
} = require("./../models")

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