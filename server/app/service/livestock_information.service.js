const {
  livestock,
  livestock_information
} = require("./../models")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")

exports.get = async () =>
{
  try {
    return await livestock_information.findAll()

  } catch (error) {
    log.error(error);
    throw Exception.setError(error.message, false);
  }
}

exports.create = async (json) =>
{
  try {
    await livestock_information.create(json)
    return {
      status: true
    }

  } catch (error) {
    log.error(error);
    throw Exception.setError(error, false);
  }
}

exports.delete = async (id) =>
{
  try {
    await livestock_information.destroy(
        {
          where: {
            id: id
          }
        }
    )
    return {
      status: true
    }

  } catch (error) {
    log.error(error);
    throw Exception.setError(error, false);
  }
}