module.exports = (app) => {
  app.use(
      "/veterinary/api",
      require("./users.routers"),
      require("./test.router"),
      require("./livestock.routers"),
      require("./livestock_types.routers"),
      require("./livestock_information.routers"),
      require("./vaccines.routers"),
      require("./address.router"),
      require("./vaccines_detail.router"),
      require("./ecips.routers"),
  )
}