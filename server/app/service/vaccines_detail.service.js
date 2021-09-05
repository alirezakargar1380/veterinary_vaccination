const {
  livestock_information, livestock, users, vaccines
} = require("./../models")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")

exports.get = async () =>
{
  try {
    return await livestock.findAll({
      include: [
        {
          model: livestock_information,
          required: true,
          include: [
            {
              model: users,
              // where: {
              //   id: 1
              // }
            },
            {
              model: vaccines,
              // where: {
              //   id: 1
              // }
            },
          ]
        },
        // {
        //   model: users,
        //   required: true
        // }
      ]
    })
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
