const express = require("express")
const Route = express.Router();
const controller = require("./../controller/vaccines.controller")

Route
    .route("/vaccines/add")
    .post(controller.add_vaccines)

module.exports = Route