const response = require("../utils/response.utitlity");
const livestock_information_service = require("../service/livestock_information.service")

exports.add_information = async (req, res) =>
{
  try {
    var result = await livestock_information_service.create(req.body)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

exports.delete_information = async (req, res) =>
{
  try {
    const {id} = req.query
    var result = await livestock_information_service.delete(id)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

exports.get_information = async (req, res) =>
{
  try {
    var result = await livestock_information_service.get()
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}