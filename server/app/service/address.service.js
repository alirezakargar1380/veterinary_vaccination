const {
  veterinary_address
} = require("./../models")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")

exports.add = async (json) =>
{
  try {
    await veterinary_address.create(json)
    return {
      status: true
    }

  } catch (error) {
    log.error(error);
    throw Exception.setError(error, false);
  }
}

exports.get = async () =>
{
  try {
    return await veterinary_address.findAll()

  } catch (error) {
    log.error(error);
    throw Exception.setError(error, false);
  }
}

exports.delete = async (id) =>
{
  try {
    await veterinary_address.destroy(
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
