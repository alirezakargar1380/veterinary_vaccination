const response = require("../utils/response.utitlity");
const vaccines_detail_service = require("./../service/vaccines_detail.service");

exports.get_vaccines_information = async (req, res) =>
{
  try {
    var result = await vaccines_detail_service.get(req.query)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e)
  }
}