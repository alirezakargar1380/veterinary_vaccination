const response = require("../utils/response.utitlity");
const vaccinesService = require("./../service/vaccines.service");

exports.add_vaccines = async (req, res) =>
{
  try {
    var result = await vaccinesService.create(req.body)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}

exports.get_vaccines = async (req, res) =>
{
  try {
    const result = await vaccinesService.get()
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}
