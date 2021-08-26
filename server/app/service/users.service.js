const {
  users
} = require("./../models")
const log = require('../utils/log.utility')
const Exception = require("../utils/error.utility")

exports.create = async (json) =>
{
  try {

    await users.create(json)
    return {
      status: true
    }

  } catch (error) {
    log.error(error);
    throw Exception.setError(error.message, false);
  }
}

exports.select = async () =>
{
  try {

    return await users.findAll()

  } catch (error) {
    log.error(error);
    throw Exception.setError(error.message, false);
  }
}

exports.delete_user = async (id) =>
{
  try {

    await users.destroy({
      where: {
        id: id
      }
    })

    return {
       status: true
    }
  } catch (error) {
    log.error(error);
    throw Exception.setError(error.message, false);
  }
}

exports.update = async (id, newUser) => {
  try {

    const User = await users.findByPk(id)

    if (!User) {
      throw Exception.setError("این کاربر موجود نمیباشد", true);
    }

    await users.update(newUser,{
      where: {
        id: id
      }
    })

    return {
      status: true
    }
  } catch (error) {
    log.error(error);
    throw Exception.setError(error.message, false);
  }
}

