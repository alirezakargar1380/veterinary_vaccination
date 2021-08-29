const livestockService = require("./../service/livestock.service")
const livestock_type_service = require("./../service/livestock_type.service")
const Exception = require("../utils/error.utility")
const response = require("../utils/response.utitlity");

exports.add_livestock = async (req, res) =>
{
  try {
    var result = await livestockService.add(req.body)
    res.send(result)

  } catch (e) {
    response.exception(res, e.message)
  }
}

exports.get_livestock = async (req, res) =>
{
  try {
    var result = await livestockService.get()
    res.send(result)

  } catch (e) {
    response.exception(res, e.message)
  }
}

