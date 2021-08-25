const express = require("express")
const app = express();

// authentication
const auth_controller = require("./controller/basic_authentication.controller")
app.use(auth_controller.API_authenticaiton)

app.use(express.json())
require("./routers")(app)

module.exports = app