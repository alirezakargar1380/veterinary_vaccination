const {
  livestock_information, livestock, users
} = require("./../models")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")

exports.get = async () =>
{
  try {
    return await livestock_information.findAll({
      include: [
        {
          model: livestock,
          required: true
        },
        {
          model: users,
          required: true
        }
      ]
    })

  } catch (error) {
    log.error(error);
    throw Exception.setError(error, false);
  }
}
