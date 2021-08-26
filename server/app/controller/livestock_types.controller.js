const livestock_type_service = require("./../service/livestock_type.service")
const response = require("../utils/response.utitlity");

exports.get_livestock_types = async (req, res) =>
{
  try {
    var result = await livestock_type_service.get()
    res.send(result)

  } catch (e) {
    response.exception(res, e.message)
  }
}