const express = require("express")
const Route = express.Router();
const controller = require("./../controller/vaccines.controller")

Route
    .route("/vaccines/add")
    .post(controller.add_vaccines)

Route
    .route("/vaccines/get")
    .get(controller.get_vaccines)

module.exports = Route