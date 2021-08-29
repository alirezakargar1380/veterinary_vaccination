module.exports = (app) => {
  app.use(
      "/api",
      require("./users.routers"),
      require("./test.router"),
      require("./livestock.routers"),
      require("./livestock_types.routers"),
      require("./livestock_information.routers"),
      require("./vaccines.routers"),
  )
}