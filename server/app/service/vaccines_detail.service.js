const {
  livestock_information, livestock, users, vaccines
} = require("./../models")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")
const { Op } = require("sequelize");

exports.get = async ({
                       name,
                       lastname,
                       state,
                       city,
                       father,
                       type_work,
}) => {
  try {
    return await livestock.findAll({
      where: {
        state: { [Op.like]: `%${state}%` },
        city: { [Op.like]: `%${city}%` },
        father: { [Op.like]: `%${father}%` },
        type_work: { [Op.like]: `%${type_work}%` },
        name: { [Op.like]: `%${name}%` },
        lastname: { [Op.like]: `%${lastname}%` },
      },
      include: [
        {
          model: livestock_information,
          where: {
          },
          required: true,
          include: [
            {
              model: users,
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
