const response = require("../utils/response.utitlity");
const address_service = require("./../service/address.service")

module.exports.add_address = async (req, res) =>
{
  try {
    var result = await address_service.add(req.body)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e.message)
  }
}

module.exports.get_address = async (req, res) =>
{
  try {
    var result = await address_service.get()
    response.success(res, result)

  } catch (e) {
    response.exception(res, e.message)
  }
}

module.exports.delete_address = async (req, res) =>
{
  try {
    const {id} = req.query
    var result = await address_service.delete(id)
    response.success(res, result)

  } catch (e) {
    response.exception(res, e.message)
  }
}