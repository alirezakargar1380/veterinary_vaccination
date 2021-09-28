const ecips_service = require("../service/ecips.service")
const response = require("../utils/response.utitlity");

module.exports.get = async (req, res) =>
{
  try {
    response.success(res, await ecips_service.select({
      group: ['ecip_id']
    }))
  } catch (e) {
    response.exception(res, e.message)
  }

}

module.exports.add = async (req, res) =>
{
  try {
    const array = []
    response.success(res, await ecips_service.create_multi(array))
  } catch (e) {
    response.exception(res, e.message)
  }

}