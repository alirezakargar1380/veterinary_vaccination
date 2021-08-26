const response = require("../utils/response.utitlity");
const usersService = require("./../service/users.service");

exports.add_user = async (req, res) =>
{
  try {
    var result = await usersService.create(req.body)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

exports.get_users = async (req, res) =>
{
  try {
    var result = await usersService.select()
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

exports.update_user = async (req, res) =>
{
  try {
    const { id } = req.query
    var result = await usersService.update(id, req.body)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

exports.delete_user = async (req, res) =>
{
  try {
    const { id } = req.query
    var result = await usersService.delete_user(id)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

