const livestock_type_service = require("./../service/livestock_type.service")
const response = require("../utils/response.utitlity");

exports.get_livestock_types = async (req, res) =>
{
  try {
    var result = await livestock_type_service.get()
    response.success(res, result)

  } catch (e) {
    response.exception(res, e.message)
  }
}

exports.add_livestock_types = async (req, res) =>
{
  try {
    var result = await livestock_type_service.add(req.body)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e.message)
  }
}

exports.delete_livestock_types = async (req, res) =>
{
  try {
    const {id} = req.query
    var result = await livestock_type_service.delete(id)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e.message)
  }
}