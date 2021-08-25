module.exports = (app) => {
  app.use(
      "/api",
      require("./users.routers"),
      require("./test.router"),
      require("./livestock.routers"),
      require("./vaccination_projects.routers"),
  )
}