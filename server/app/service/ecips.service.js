const {
  ecips
} = require("./../models")

module.exports.select = async (json) => {
  return await ecips.findAll(json)
}

module.exports.create_multi = async (array) => {
  return await ecips.bulkCreate([
    {
      employee_id: 6,
      ecip_id: "hadfi"
    },
    {
      employee_id: 6,
      ecip_id: "hadfi"
    },
    {
      employee_id: 6,
      ecip_id: "hadfi"
    },
  ])
}