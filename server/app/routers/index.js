module.exports = (app) => {
  app.use(
      "/api",
      require("./employees.routers"),
      require("./test.router"),
      require("./livestock.routers"),
      require("./vaccination_projects.routers"),
  )
}