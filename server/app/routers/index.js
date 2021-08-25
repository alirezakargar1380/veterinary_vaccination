module.exports = (app) => {
  app.use(
      "/api",
      require("./employees.routers"),
      require("./test.router"),
  )
}