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
                       booklet_number,
                       type,type_livestock,
                       personnel_code,
                       emp_name, emp_lastname, vac_name
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
        booklet_number: { [Op.like]: `%${booklet_number}%` },
      },
      include: [
        {
          model: livestock_information,
          where: {
            type: { [Op.like]: `%${type}%` },
            type_livestock: { [Op.like]: `%${type_livestock}%` },
          },
          required: true,
          include: [
            {
              model: users,
              where: {
                personnel_code: { [Op.like]: `%${personnel_code}%` },
                name: { [Op.like]: `%${emp_name}%` },
                lastname: { [Op.like]: `%${emp_lastname}%` },
              }
            },
            {
              model: vaccines,
              where: {
                name: { [Op.like]: `%${vac_name}%` },
              }
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
