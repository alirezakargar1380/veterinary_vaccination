const express = require("express")
const Route = express.Router();
const controller = require("../controller/users.controller")

Route
    .route("/add_employee")
    .post()

module.exports = Route